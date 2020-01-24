module.exports = (app) => {
  app.post(`/list`, require('./listCreate'));
  app.put(`/list/:id`, require('./listUpdate'));
  app.post(`/list/import`, require('./listImport'));
  app.delete(`/list`, require('./listDestroy'));
  app.get(
    `/list/autocomplete`,
    require('./listAutocomplete'),
  );
  app.get(`/list`, require('./listList'));
  app.get(`/list/:id`, require('./listFind'));
};
