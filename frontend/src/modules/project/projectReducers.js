import list from 'modules/project/list/projectListReducers';
import form from 'modules/project/form/projectFormReducers';
import view from 'modules/project/view/projectViewReducers';
import destroy from 'modules/project/destroy/projectDestroyReducers';
import importerReducer from 'modules/project/importer/projectImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
