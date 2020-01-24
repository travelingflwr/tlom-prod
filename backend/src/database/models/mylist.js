const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class myList extends AbstractEntityModel {
  constructor() {
    super('mylist', 'mylist', {
      name: new types.String(3, 40),
      description: new types.String(3, 21000),
      customer: new types.RelationToOne(),
      subscription: new types.RelationToOne(),
      list: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
