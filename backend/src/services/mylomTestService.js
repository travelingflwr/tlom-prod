const MylomTestRepository = require('../database/repositories/mylomTestRepository');
const ValidationError = require('../errors/validationError');
const FirebaseRepository = require('../database/repositories/firebaseRepository');

/**
 * Handles MylomTest operations
 */
module.exports = class MylomTestService {
  constructor({ currentUser, language }) {
    this.repository = new MylomTestRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  /**
   * Creates a MylomTest.
   *
   * @param {*} data
   */
  async create(data) {
    const batch = await FirebaseRepository.createBatch();

    try {
      const record = await this.repository.create(data, {
        batch: batch,
        currentUser: this.currentUser,
      });

      await FirebaseRepository.commitBatch(batch);

      return this.repository.findById(record.id);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates a MylomTest.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const batch = await FirebaseRepository.createBatch();

    try {
      const record = await this.repository.update(
        id,
        data,
        {
          batch,
          currentUser: this.currentUser,
        },
      );

      await FirebaseRepository.commitBatch(batch);

      return this.repository.findById(record.id);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Destroy all MylomTests with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const batch = await FirebaseRepository.createBatch();

    try {
      for (const id of ids) {
        await this.repository.destroy(id, {
          batch,
          currentUser: this.currentUser,
        });
      }

      await FirebaseRepository.commitBatch(batch);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Finds the MylomTest by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    
    return this.repository.findById(id);
  }

  /**
   * Finds MylomTests for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  
  /* async findAllAutocomplete(search, limit) {
    return this.repository.findAllAutocomplete(
      search,
      limit,
    );
  } */
  
   async findAllAutocomplete(filter, limit) {

    if (
      !filter || 
      !filter.owner ||
      filter.owner !== this.currentUser
    ) {
      console.log("Caught it");
    }
    return this.repository.findAllAutocomplete(
      filter,
      limit,
    );
  }

  /* async findAllAutocomplete(filter, limit) {
    if (UserRoleChecker.isSubscriber(this.currentUser)) {
      if (
        !filter ||
        !filter.owner ||
        filter.owner !== this.currentUser.id
      ) {
        throw new ForbiddenError(this.language);
      }
    }

    return this.repository.findAllAutocomplete(
      filter,
      limit,
    );
  } */

  /**
   * Finds MylomTests based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return this.repository.findAndCountAll(args);
  }

  

  

  /**
   * Imports a list of MylomTests.
   *
   * @param {*} data
   * @param {*} importHash
   */
  async import(data, importHash) {
    if (!importHash) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  /**
   * Checks if the import hash already exists.
   * Every item imported has a unique hash.
   *
   * @param {*} importHash
   */
  async _isImportHashExistent(importHash) {
    const count = await this.repository.count({
      importHash,
    });

    return count > 0;
  }
};
