const genericFixture = require('./genericFixture');
const MylomRepository = require('../database/repositories/mylomRepository');

const mylomFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new MylomRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = mylomFixture;
