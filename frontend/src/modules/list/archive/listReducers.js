import list from 'modules/list/list/listListReducers';
import form from 'modules/list/form/listFormReducers';
import view from 'modules/list/view/listViewReducers';
import destroy from 'modules/list/destroy/listDestroyReducers';
import importerReducer from 'modules/list/importer/listImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
