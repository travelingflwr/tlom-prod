const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Subscription extends AbstractEntityModel {
  constructor() {
    super('subscription', 'subscription', {
      name: new types.String(2, 255),
      description: new types.String(null, 2000),
      unitPrice: new types.Number(0, 50),
      photo: new types.Files(),
      duration: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
