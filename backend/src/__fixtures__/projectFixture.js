const genericFixture = require('./genericFixture');
const ProjectRepository = require('../database/repositories/projectRepository');

const projectFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ProjectRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = projectFixture;
