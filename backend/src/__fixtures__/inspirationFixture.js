const genericFixture = require('./genericFixture');
const InspirationRepository = require('../database/repositories/inspirationRepository');

const inspirationFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new InspirationRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = inspirationFixture;
