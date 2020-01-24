const FirebaseRepository = require('./firebaseRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Customer = require('../models/customer');
const AuditLogRepository = require('./auditLogRepository');

/**
 * Handles database operations for the Customer.
 */
class CustomerRepository {
  /**
   * Creates the Customer.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    const record = {
      id: FirebaseRepository.newId(),
      ...new Customer().cast(data),
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
          `${new Customer().collectionName}/${record.id}`,
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

    await FirebaseRepository.refreshTwoWayRelationManyToOne(
      record,
      'customer',
      'project',
      'hive',
      'customer',
      options,
    );

    return record;
  }

  /**
   * Updates the Customer.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    const record = {
      id,
      ...new Customer().cast(data),
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(
          `${new Customer().collectionName}/${record.id}`,
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

    await FirebaseRepository.refreshTwoWayRelationManyToOne(
      record,
      'customer',
      'project',
      'hive',
      'customer',
      options,
    );

    return record;
  }

  /**
   * Deletes the Customer.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await FirebaseRepository.executeOrAddToBatch(
      'delete',
      admin
        .firestore()
        .doc(`${new Customer().collectionName}/${id}`),
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
      'order',
      'customer',
      options,
    );

    await FirebaseRepository.destroyRelationToOne(
      id,
      'mylom',
      'customer',
      options,
    );

    await FirebaseRepository.destroyRelationToOne(
      id,
      'hive',
      'customer',
      options,
    );

    await FirebaseRepository.destroyRelationToOne(
      id,
      'list',
      'customer',
      options,
    );

    await FirebaseRepository.destroyRelationToOne(
      id,
      'task',
      'customer',
      options,
    );
  }

  /**
   * Counts the number of Customers based on the filter.
   *
   * @param {Object} filter
   */
  async count(filter) {
    let chain = admin
      .firestore()
      .collection(new Customer().collectionName);

    if (filter) {
      Object.keys(filter).forEach((key) => {
        chain = chain.where(key, '==', filter[key]);
      });
    }

    return (await chain.get()).size;
  }

  /**
   * Finds the Customer and its relations.
   *
   * @param {string} id
   */
  async findById(id) {
    const record = await FirebaseRepository.findDocument(
      'customer',
      id,
    );
    return this.populate(record);
  }

  /**
   * Finds the Customers based on the query.
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

      if (filter.user) {
        query.appendId('user', filter.user);
      }

      if (
        filter.subscribed === true ||
        filter.subscribed === 'true' ||
        filter.subscribed === false ||
        filter.subscribed === 'false'
      ) {
        query.appendEqual('subscribed', filter.subscribed === true || filter.subscribed === 'true');
      }

      if (filter.about) {
        query.appendIlike('about', filter.about);
      }

      if (filter.subscription) {
        query.appendId('subscription', filter.subscription);
      }

      if (filter.lastName) {
        query.appendIlike('lastName', filter.lastName);
      }

      if (filter.subscriptionTest) {
        query.appendEqual('subscriptionTest', filter.subscriptionTest);
      }

      if (filter.subscriptionExpirationRange) {
        query.appendRange(
          'subscriptionExpiration',
          filter.subscriptionExpirationRange,
        );
      }

      if (filter.firstName) {
        query.appendIlike('firstName', filter.firstName);
      }

      if (filter.userFirstName) {
        query.appendId('userFirstName', filter.userFirstName);
      }

      if (filter.userLastName) {
        query.appendId('userLastName', filter.userLastName);
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
      .collection(`customer`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  /**
   * Lists the Customers to populate the autocomplete.
   * See https://mongoosejs.com/docs/queries.html to learn how to
   * customize the query.
   *
   * @param {Object} search
   * @param {number} limit
   */
  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'displayName_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('displayName', search);
    }

    const collection = await admin
      .firestore()
      .collection(`customer`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['displayName'],
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

    record.subscription = await FirebaseRepository.findRelation(
      'subscription',
      record.subscription,
    );

    record.user = await FirebaseRepository.findRelation(
      'user',
      record.user,
    );

    record.userFirstName = await FirebaseRepository.findRelation(
      'user',
      record.userFirstName,
    );

    record.userLastName = await FirebaseRepository.findRelation(
      'user',
      record.userLastName,
    );

    record.project =
      (await FirebaseRepository.findRelation('hive', record.project)) ||
      [];

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
        entityName: new Customer().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = CustomerRepository;
