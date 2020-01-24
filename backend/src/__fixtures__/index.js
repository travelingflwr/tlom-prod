const userFixture = require('./userFixture');
const petFixture = require('./petFixture');
const bookingFixture = require('./bookingFixture');
const customerFixture = require('./customerFixture');
const subscriptionFixture = require('./subscriptionFixture');
const orderFixture = require('./orderFixture');
const projectFixture = require('./mylomFixture');
const hiveFixture = require('./hiveFixture');
const mylomFixture = require('./projectFixture');
const mylomTestFixture = require('./projectTestFixture');
const mylomUserFixture = require('./projectUserFixture');
const categoryFixture = require('./categoryFixture');
const listFixture = require('./listFixture');
const taskFixture = require('./taskFixture');
const inspirationFixture = require('./inspirationFixture');
const tagFixture = require('./tagFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  pet: petFixture,
  booking: bookingFixture,
  customer: customerFixture,
  subscription: subscriptionFixture,
  order: orderFixture,
  project: projectFixture,
  mylom: mylomFixture,
  mylomTest: mylomTestFixture,
  mylomUser: mylomUserFixture,
  hive: hiveFixture,
  category: categoryFixture,
  list: listFixture,
  task: taskFixture,
  inspiration: inspirationFixture,
  tag: tagFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
