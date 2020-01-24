const MylomRepository = require('../database/repositories/mylomRepositoryUser');
const ValidationError = require('../errors/validationError');
const FirebaseRepository = require('../database/repositories/firebaseRepository');

/**
 * Handles Mylom operations
 */
module.exports = class MylomServiceUser {
  constructor({ currentUser, language }) {
    this.repository = new MylomRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  /**
   * Creates a Mylom.
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
   * Updates a Mylom.
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
   * Destroy all Myloms with those ids.
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
   * Finds the Mylom by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    
    return this.repository.findById(id);
  }

  /**
   * Finds Myloms for Autocomplete.
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
   * Finds Myloms based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return this.repository.findAndCountAll(args);
  }

  

  

  /**
   * Imports a list of Myloms.
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
