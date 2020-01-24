const FirebaseRepository = require('./firebaseRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const MylomTest = require('../models/mylomTest');
const AuditLogRepository = require('./auditLogRepository');

/**
 * Handles database operations for the Mylom.
 */
class MylomTestRepository {
  /**
   * Creates the MylomTest.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    const record = {
      id: FirebaseRepository.newId(),
      ...new MylomTest().cast(data),
      createdBy: FirebaseRepository.getCurrentUser(options)
        .id,
      createdAt: FirebaseRepository.serverTimestamp(),
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(
          `${new MylomTest().collectionName}/${record.id}`,
        ),
      record,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );



    return record;
  }

  /**
   * Updates the Mylom.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    const record = {
      id,
      ...new MylomTest().cast(data),
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(
          `${new MylomTest().collectionName}/${record.id}`,
        ),
      record,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );



    return record;
  }

  /**
   * Deletes the MylomTest.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await FirebaseRepository.executeOrAddToBatch(
      'delete',
      admin
        .firestore()
        .doc(`${new MylomTest().collectionName}/${id}`),
      null,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );

    await FirebaseRepository.destroyRelationToOne(
      id,
      'hive',
      'mylomtest',
      options,
    );
  }

  /**
   * Counts the number of MylomTests based on the filter.
   *
   * @param {Object} filter
   */
  async count(filter) {
    let chain = admin
      .firestore()
      .collection(new MylomTest().collectionName);

    if (filter) {
      Object.keys(filter).forEach((key) => {
        chain = chain.where(key, '==', filter[key]);
      });
    }

    return (await chain.get()).size;
  }

  /**
   * Finds the MylomTest and its relations.
   *
   * @param {string} id
   */
  async findById(id) {
    const record = await FirebaseRepository.findDocument(
      'mylomtest',
      id,
    );
    return this.populate(record);
  }

  /**
   * Finds the Mylom and its relations for current user.
   *
   * @param {string} id
   */
  async findByUserID(userID) {
    const record = await FirebaseRepository.findDocument(
      'mylomtest',
      userID,
    );
    return this.populate(record);
  }

  /**
   * Finds the MylomTests based on the query.
   * See https://mongoosejs.com/docs/queries.html to learn how
   * to customize the queries.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  async findAndCountAll(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
  ) {
    const query = FirebaseQuery.forList({
      limit,
      offset,
      orderBy: orderBy || 'createdAt_DESC',
    });

    if (filter) {
      if (filter.id) {
        query.appendId('id', filter.id);
      }

      if (filter.name) {
        query.appendIlike('name', filter.name);
      }

      if (filter.description) {
        query.appendIlike('description', filter.description);
      }

      if (filter.user) {
        query.appendId('user', filter.user);
      }

      if (filter.customer) {
        query.appendId('customer', filter.customer);
      }

      if (filter.subscription) {
        query.appendId('subscription', filter.subscription);
      }

      if (filter.dueDateRange) {
        query.appendRange(
          'dueDate',
          filter.dueDateRange,
        );
      }

      if (filter.category) {
        query.appendId('category', filter.category);
      }

      if (
        filter.state === true ||
        filter.state === 'true' ||
        filter.state === false ||
        filter.state === 'false'
      ) {
        query.appendEqual('state', filter.state === true || filter.state === 'true');
      }

      if (filter.status) {
        query.appendEqual('status', filter.status);
      }

      if (filter.createdAtRange) {
        query.appendRange(
          'createdAt',
          filter.createdAtRange,
        );
      }
    }

    const collection = await admin
      .firestore()
      .collection(`mylomtest`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  /**
   * Lists the MylomTests to populate the autocomplete.
   * See https://mongoosejs.com/docs/queries.html to learn how to
   * customize the query.
   *
   * @param {Object} search
   * @param {number} limit
   */
  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'name_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('name', search);
    }

    const collection = await admin
      .firestore()
      .collection(`mylomtest`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['name'],
    }));
  }

  /**
   * Populates the records with all its relations.
   * @param {*} records
   */
  async populateAll(records) {
    return await Promise.all(
      records.map((record) => this.populate(record)),
    );
  }

  /**
   * Populates the record with all its relations.
   * @param {*} record
   */
  async populate(record) {
    if (!record) {
      return record;
    }

    record.customer = await FirebaseRepository.findRelation(
      'customer',
      record.customer,
    );

    record.subscription = await FirebaseRepository.findRelation(
      'subscription',
      record.subscription,
    );

    record.category = await FirebaseRepository.findRelation(
      'category',
      record.category,
    );

    record.user = await FirebaseRepository.findRelation(
      'user',
      record.user,
    );

    return record;
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} id - The record id
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  async _createAuditLog(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new MylomTest().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = MylomTestRepository;
