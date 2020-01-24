module.exports = (app) => {
  app.post(`/mylom`, require('./mylomCreate'));
  app.put(`/mylom/:id`, require('./mylomUpdate'));
  app.post(`/mylom/import`, require('./mylomImport'));
  app.delete(`/mylom`, require('./mylomDestroy'));
  app.get(
    `/mylom/autocomplete`,
    require('./mylomAutocomplete'),
  );
  app.get(`/mylom`, require('./mylomList'));
  app.get(`/mylom/:id`, require('./mylomFind'));
};
