module.exports = (app) => {
  app.post(`/task`, require('./taskCreate'));
  app.put(`/task/:id`, require('./taskUpdate'));
  app.post(`/task/import`, require('./taskImport'));
  app.delete(`/task`, require('./taskDestroy'));
  app.get(
    `/task/autocomplete`,
    require('./taskAutocomplete'),
  );
  app.get(`/task`, require('./taskList'));
  app.get(`/task/:id`, require('./taskFind'));
};
