import list from 'modules/hive/list/hiveListReducers';
import form from 'modules/hive/form/hiveFormReducers';
import view from 'modules/hive/view/hiveViewReducers';
import destroy from 'modules/hive/destroy/hiveDestroyReducers';
import importerReducer from 'modules/hive/importer/hiveImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
