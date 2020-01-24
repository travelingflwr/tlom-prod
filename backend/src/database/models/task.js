const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Task extends AbstractEntityModel {
  constructor() {
    super('task', 'task', {
      name: new types.String(null, null),
      description: new types.String(null, null),
      dueDate: new types.Date(),
      customer: new types.RelationToOne(),
      user: new types.RelationToOne(),
      subscription: new types.RelationToOne(),
      category: new types.RelationToOne(),
      state: new types.Boolean(),
      status: new types.Enumerator([
        "active",
        "pending",
        "waiting",
        "cancelled",
        "complete"
      ]),
      parent: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
