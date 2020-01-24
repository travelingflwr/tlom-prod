const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class List extends AbstractEntityModel {
  constructor() {
    super('list', 'list', {
      name: new types.String(5, 40),
      description: new types.String(5, 2000),
      project: new types.RelationToOne(),
      task: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
