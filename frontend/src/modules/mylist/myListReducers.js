import list from 'modules/mylist/list/myListListReducers';
import form from 'modules/mylist/form/myListFormReducers';
import view from 'modules/mylist/view/myListViewReducers';
import destroy from 'modules/mylist/destroy/myListDestroyReducers';
import importerReducer from 'modules/mylist/importer/myListImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
