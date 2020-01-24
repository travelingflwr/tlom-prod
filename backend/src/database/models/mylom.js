const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Mylom extends AbstractEntityModel {
  constructor() {
    super('mylom', 'mylom', {
      name: new types.String(null, null),
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
