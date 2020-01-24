const genericFixture = require('./genericFixture');
const HiveRepository = require('../database/repositories/hiveRepository');

const hiveFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new HiveRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = hiveFixture;
