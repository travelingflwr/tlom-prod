const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Customer extends AbstractEntityModel {
  constructor() {
    super('customer', 'customer', {
      user: new types.RelationToOne(),
      subscribed: new types.Boolean(),
      displayName: new types.String(null, null),
      about: new types.String(5, 2000),
      subscription: new types.RelationToOne(),
      project: new types.RelationToMany(),
      lastName: new types.String(null, null),
      subscriptionTest: new types.Enumerator([
        "lifetime",
        "annual",
        "monthly",
        "demo",
        "beta"
      ]),
      subscriptionExpiration: new types.Date(),
      firstName: new types.String(2, 40),
      userFirstName: new types.RelationToOne(),
      userLastName: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
