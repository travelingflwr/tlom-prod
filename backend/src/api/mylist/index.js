module.exports = (app) => {
  app.post(`/mylist`, require('./myListCreate'));
  app.put(`/mylist/:id`, require('./myListUpdate'));
  app.post(`/mylist/import`, require('./myListImport'));
  app.delete(`/mylist`, require('./myListDestroy'));
  app.get(
    `/mylist/autocomplete`,
    require('./mylistAutocomplete'),
  );
  app.get(`/mylist`, require('./myListList'));
  app.get(`/mylist/:id`, require('./myListFind'));
};
