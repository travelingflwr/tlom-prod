module.exports = (app) => {
  app.post(`/project`, require('./projectCreate'));
  app.put(`/project/:id`, require('./projectUpdate'));
  app.post(`/project/import`, require('./projectImport'));
  app.delete(`/project`, require('./projectDestroy'));
  app.get(
    `/project/autocomplete`,
    require('./projectAutocomplete'),
  );
  app.get(`/project`, require('./projectList'));
  app.get(`/project/:id`, require('./projectFind'));
};
