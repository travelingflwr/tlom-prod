const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Subscription extends AbstractEntityModel {
  constructor() {
    super('subscription', 'subscription', {
      name: new types.String(2, 255),
      description: new types.String(null, 21845),
      unitPrice: new types.Number(0.01, 99999),
      photo: new types.Files(),
      importHash: new types.String(null, 255),
    });
  }
};
