const ListRepository = require('../database/repositories/listRepository');
const ValidationError = require('../errors/validationError');
const FirebaseRepository = require('../database/repositories/firebaseRepository');

/**
 * Handles List operations
 */
module.exports = class ListService {
  constructor({ currentUser, language }) {
    this.repository = new ListRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  /**
   * Creates a List.
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
   * Updates a List.
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
   * Destroy all Lists with those ids.
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
   * Finds the List by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return this.repository.findById(id);
  }

  /**
   * Finds Lists for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return this.repository.findAllAutocomplete(
      search,
      limit,
    );
  }

  /**
   * Finds Lists based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return this.repository.findAndCountAll(args);
  }

  /**
   * Imports a list of Lists.
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
