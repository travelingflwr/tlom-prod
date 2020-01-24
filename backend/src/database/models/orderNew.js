const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Order extends AbstractEntityModel {
  constructor() {
    super('order', 'order', {
      customer: new types.RelationToOne(),
      subscription: new types.RelationToOne(),
      employee: new types.RelationToOne(),
      delivered: new types.Boolean(),
      attachments: new types.Files(),
      user: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
