const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class List extends AbstractEntityModel {
  constructor() {
    super('list', 'list', {
      name: new types.String(5, 40),
      description: new types.String(5, 2000),
      project: new types.RelationToOne(),
      customer: new types.RelationToOne(),
      subscription: new types.RelationToOne(),
      user: new types.RelationToOne(),
      dueDate: new types.Date(),
      category: new types.RelationToMany(),
      state: new types.Boolean(),
      status: new types.Enumerator([
        "active",
        "pending",
        "waiting",
        "cancelled",
        "complete"
      ]),
      importHash: new types.String(null, 255),
    });
  }
};
