module.exports = (app) => {
  app.post(`/hive`, require('./hiveCreate'));
  app.put(`/hive/:id`, require('./hiveUpdate'));
  app.post(`/hive/import`, require('./hiveImport'));
  app.delete(`/hive`, require('./hiveDestroy'));
  app.get(
    `/hive/autocomplete`,
    require('./hiveAutocomplete'),
  );
  app.get(`/hive`, require('./hiveList'));
  app.get(`/hive/:id`, require('./hiveFind'));
};
