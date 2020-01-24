const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Task extends AbstractEntityModel {
  constructor() {
    super('task', 'task', {
      name: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
