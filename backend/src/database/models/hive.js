const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Hive extends AbstractEntityModel {
  constructor() {
    super('hive', 'hive', {
      name: new types.String(3, 40),
      description: new types.String(3, 21000),
      customer: new types.RelationToOne(),
      subscription: new types.RelationToOne(),
      user: new types.RelationToOne(),
      mylom: new types.RelationToOne(),
      category: new types.RelationToOne(),
      status: new types.Enumerator([
        "active",
        "pending",
        "waiting",
        "cancelled",
        "complete"
      ]),
      state: new types.Boolean(),
      importHash: new types.String(null, 255),
    });
  }
};
