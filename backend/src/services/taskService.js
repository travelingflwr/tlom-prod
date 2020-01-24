const TaskRepository = require('../database/repositories/taskRepository');
const ValidationError = require('../errors/validationError');
const FirebaseRepository = require('../database/repositories/firebaseRepository');

/**
 * Handles Task operations
 */
module.exports = class TaskService {
  constructor({ currentUser, language }) {
    this.repository = new TaskRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  /**
   * Creates a Task.
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
   * Updates a Task.
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
   * Destroy all Tasks with those ids.
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
   * Finds the Task by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return this.repository.findById(id);
  }

  /**
   * Finds Tasks for Autocomplete.
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
   * Finds Tasks based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return this.repository.findAndCountAll(args);
  }

  /**
   * Imports a list of Tasks.
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
