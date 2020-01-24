const genericFixture = require('./genericFixture');
const MylomTestRepository = require('../database/repositories/mylomTestRepository');

const mylomTestFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new MylomTestRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = mylomTestFixture;
