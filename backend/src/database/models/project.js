const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Project extends AbstractEntityModel {
  constructor() {
    super('project', 'project', {
      name: new types.String(3, 40),
      description: new types.String(3, 21000),
      user: new types.RelationToOne(),
      customer: new types.RelationToOne(),
      subscription: new types.RelationToOne(),
      list: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
