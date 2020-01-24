const lodash = require('lodash');
const moment = require('moment');

/**
 * Utilities to use on Firestore queries.
 */
module.exports = class FirebaseQuery {
  constructor(limit, offset, orderBy, isOr) {
    this.limit = limit;
    this.offset = offset;
    this.orderBy = orderBy;
    this.predicates = {};
    this.isOr = isOr;
  }

  static forList({
    limit = null,
    offset = null,
    orderBy = null,
  } = {}) {
    return new FirebaseQuery(limit, offset, orderBy, false);
  }

  static forAutocomplete({
    limit = null,
    offset = null,
    orderBy = null,
  } = {}) {
    return new FirebaseQuery(limit, offset, orderBy, true);
  }

  get filters() {
    return {
      equal: (search) => (value) => {
        if (search === undefined || search === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value === search;
      },
      in: (search) => (value) => {
        if (search === undefined || search === null) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.includes(search);
      },
      range: (start, end) => (value) => {
        const startDateOnly = start && start.length === 10;
        if (
          !startDateOnly &&
          moment(start, moment.ISO_8601, true).isValid()
        ) {
          start = +moment(start, moment.ISO_8601, true);
        }

        const endDateOnly = end && end.length === 10;
        if (
          !endDateOnly &&
          moment(end, moment.ISO_8601, true).isValid()
        ) {
          end = +moment(end, moment.ISO_8601, true);
        }

        if (!start && !end) {
          return true;
        }

        if (start && end) {
          return value >= start && value <= end;
        }

        if (start !== undefined && start !== null && start !== '') {
          return value >= start;
        }

        if (end !== undefined && end !== null && end !== '') {
          return value <= end;
        }

        return true;
      },
      ilike: (search) => (value) => {
        if (!search) {
          return true;
        }

        if (!value) {
          return false;
        }

        return value
          .toLowerCase()
          .includes(search.toLowerCase());
      },
    };
  }

  appendEqual(column, value) {
    this.predicates = {
      ...this.predicates,
      [column]: this.filters.equal(value),
    };
  }

  appendId(column, value) {
    this.predicates = {
      ...this.predicates,
      [column]: this.filters.equal(value),
    };
  }

  appendIn(column, value) {
    this.predicates = {
      ...this.predicates,
      [column]: this.filters.in(value),
    };
  }

  appendIlike(column, value) {
    this.predicates = {
      ...this.predicates,
      [column]: this.filters.ilike(value),
    };
  }

  appendRange(column, value) {
    const [start, end] = value;
    this.predicates = {
      ...this.predicates,
      [column]: this.filters.range(start, end),
    };
  }

  filter(collection) {
    const predicates = this.predicates;

    if (
      !collection ||
      !predicates ||
      !Object.keys(predicates).length
    ) {
      return collection;
    }

    const results = Object.keys(predicates).map((key) => {
      return collection.filter((item) =>
        predicates[key](item[key]),
      );
    });

    if (this.isOr) {
      return lodash.union(...results);
    }

    return lodash.intersection(...results);
  }

  count(collection) {
    return this.filter(collection).length;
  }

  rows(collection) {
    const filtered = this.filter(collection);
    let result = filtered;

    if (this.orderBy) {
      const [column, direction] = this.orderBy.split('_');
      result = lodash.sortBy(result, column);

      if (direction === 'DESC') {
        result = lodash.reverse(result);
      }
    }

    if (this.offset) {
      result = lodash.drop(result, this.offset);
    }

    if (this.limit) {
      result = lodash.slice(result, 0, this.limit);
    }

    return result;
  }
};
