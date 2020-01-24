const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Tag extends AbstractEntityModel {
  constructor() {
    super('tag', 'tag', {
      name: new types.String(null, null),
      description: new types.String(10, 2000),
      inspiration: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
