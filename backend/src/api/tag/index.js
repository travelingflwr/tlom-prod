module.exports = (app) => {
  app.post(`/tag`, require('./tagCreate'));
  app.put(`/tag/:id`, require('./tagUpdate'));
  app.post(`/tag/import`, require('./tagImport'));
  app.delete(`/tag`, require('./tagDestroy'));
  app.get(
    `/tag/autocomplete`,
    require('./tagAutocomplete'),
  );
  app.get(`/tag`, require('./tagList'));
  app.get(`/tag/:id`, require('./tagFind'));
};
