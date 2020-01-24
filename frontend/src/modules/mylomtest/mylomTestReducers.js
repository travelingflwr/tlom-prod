import list from 'modules/mylomtest/list/mylomTestListReducers';
import form from 'modules/mylomtest/form/mylomTestFormReducers';
import view from 'modules/mylomtest/view/mylomTestViewReducers';
import destroy from 'modules/mylomtest/destroy/mylomTestDestroyReducers';
import importerReducer from 'modules/mylomtest/importer/mylomTestImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
