module.exports = (app) => {
  app.post(`/mylomtest`, require('./mylomTestCreate'));
  app.put(`/mylomtest/:id`, require('./mylomTestUpdate'));
  app.post(`/mylomtest/import`, require('./mylomTestImport'));
  app.delete(`/mylomtest`, require('./mylomTestDestroy'));
  app.get(
    `/mylomtest/autocomplete`,
    require('./mylomTestAutocomplete'),
  );
  app.get(`/mylomtest`, require('./mylomTestList'));
  app.get(`/mylomtest/:id`, require('./mylomTestFind'));
};
