const genericFixture = require('./genericFixture');
const myListRepository = require('../database/repositories/myListRepository');

const myListFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new myListRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = myListFixture;
