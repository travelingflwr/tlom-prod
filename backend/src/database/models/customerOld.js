const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Customer extends AbstractEntityModel {
  constructor() {
    super('customer', 'customer', {
      name: new types.String(2, 255),
      subscribed: new types.Boolean(),
      subscription: new types.RelationToOne(),
      project: new types.RelationToMany(),
      location: new types.String(null, null),
      about: new types.String(5, 2000),
      importHash: new types.String(null, 255),
    });
  }
};
