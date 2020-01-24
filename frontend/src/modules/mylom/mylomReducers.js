import list from 'modules/mylom/list/mylomListReducers';
import form from 'modules/mylom/form/mylomFormReducers';
import view from 'modules/mylom/view/mylomViewReducers';
import destroy from 'modules/mylom/destroy/mylomDestroyReducers';
import importerReducer from 'modules/mylom/importer/mylomImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
