const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Category extends AbstractEntityModel {
  constructor() {
    super('category', 'category', {
      name: new types.String(null, null),
      user: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
