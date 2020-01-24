const genericFixture = require('./genericFixture');
const TagRepository = require('../database/repositories/tagRepository');

const tagFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new TagRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = tagFixture;
