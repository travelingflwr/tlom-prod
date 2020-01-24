const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Inspiration extends AbstractEntityModel {
  constructor() {
    super('inspiration', 'inspiration', {
      name: new types.String(null, null),
      description: new types.String(null, null),
      photo: new types.Files(),
      tag: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
