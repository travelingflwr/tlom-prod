module.exports = (app) => {
  app.post(`/inspiration`, require('./inspirationCreate'));
  app.put(`/inspiration/:id`, require('./inspirationUpdate'));
  app.post(`/inspiration/import`, require('./inspirationImport'));
  app.delete(`/inspiration`, require('./inspirationDestroy'));
  app.get(
    `/inspiration/autocomplete`,
    require('./inspirationAutocomplete'),
  );
  app.get(`/inspiration`, require('./inspirationList'));
  app.get(`/inspiration/:id`, require('./inspirationFind'));
};
