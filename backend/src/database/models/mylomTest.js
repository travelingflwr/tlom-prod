const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class MylomTest extends AbstractEntityModel {
  constructor() {
    super('mylomtest', 'mylomtest', {
      createdAt: new types.Date(),
      done: new types.Boolean(),
      topMylom: new types.String(null, null),
      mylomName: new types.String(null, null),
      description: new types.String(null, null),
      user: new types.RelationToOne(),
      customer: new types.RelationToOne(),
      subscription: new types.RelationToOne(),
      dueDate: new types.Date(),
      category: new types.RelationToOne(),
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
