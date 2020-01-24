import list from 'modules/subscription/list/subscriptionListReducers';
import form from 'modules/subscription/form/subscriptionFormReducers';
import view from 'modules/subscription/view/subscriptionViewReducers';
import destroy from 'modules/subscription/destroy/subscriptionDestroyReducers';
import importerReducer from 'modules/subscription/importer/subscriptionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
