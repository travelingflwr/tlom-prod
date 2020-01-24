module.exports = (app) => {
  app.post(`/subscription`, require('./subscriptionCreate'));
  app.put(`/subscription/:id`, require('./subscriptionUpdate'));
  app.post(`/subscription/import`, require('./subscriptionImport'));
  app.delete(`/subscription`, require('./subscriptionDestroy'));
  app.get(
    `/subscription/autocomplete`,
    require('./subscriptionAutocomplete'),
  );
  app.get(`/subscription`, require('./subscriptionList'));
  app.get(`/subscription/:id`, require('./subscriptionFind'));
};
