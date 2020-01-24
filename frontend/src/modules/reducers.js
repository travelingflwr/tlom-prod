import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import customer from 'modules/customer/customerReducers';
import subscription from 'modules/subscription/subscriptionReducers';
import order from 'modules/order/orderReducers';
import project from 'modules/project/projectReducers';
import mylom from 'modules/mylom/mylomReducers';
import mylomtest from 'modules/mylomtest/mylomTestReducers';
import hive from 'modules/hive/hiveReducers';
import category from 'modules/category/categoryReducers';
import list from 'modules/list/listReducers';
import task from 'modules/task/taskReducers';
import inspiration from 'modules/inspiration/inspirationReducers';
import tag from 'modules/tag/tagReducers';
// import pet from 'modules/pet/petReducers';
// import booking from 'modules/booking/bookingReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    customer,
    subscription,
    order,
    project,
    hive,
    category,
    mylom,
    mylomtest,
    list,
    task,
    inspiration,
    tag,
    // pet,
    // booking,
  });
