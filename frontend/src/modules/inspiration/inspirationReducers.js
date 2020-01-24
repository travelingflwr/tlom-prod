import list from 'modules/inspiration/list/inspirationListReducers';
import form from 'modules/inspiration/form/inspirationFormReducers';
import view from 'modules/inspiration/view/inspirationViewReducers';
import destroy from 'modules/inspiration/destroy/inspirationDestroyReducers';
import importerReducer from 'modules/inspiration/importer/inspirationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
