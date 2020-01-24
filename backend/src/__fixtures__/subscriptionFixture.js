const genericFixture = require('./genericFixture');
const SubscriptionRepository = require('../database/repositories/subscriptionRepository');

const subscriptionFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new SubscriptionRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = subscriptionFixture;
