import list from 'modules/tag/list/tagListReducers';
import form from 'modules/tag/form/tagFormReducers';
import view from 'modules/tag/view/tagViewReducers';
import destroy from 'modules/tag/destroy/tagDestroyReducers';
import importerReducer from 'modules/tag/importer/tagImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
