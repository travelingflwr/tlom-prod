const genericFixture = require('./genericFixture');
const ListRepository = require('../database/repositories/listRepository');

const listFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ListRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = listFixture;
