import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';

const selectPermissionToRead = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.subscriptionRead,
    ),
);

const selectPermissionToEdit = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.subscriptionEdit,
    ),
);

const selectPermissionToCreate = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.subscriptionCreate,
    ),
);

const selectPermissionToImport = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.subscriptionImport,
    ),
);

const selectPermissionToDestroy = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.subscriptionDestroy,
    ),
);

const selectors = {
  selectPermissionToRead,
  selectPermissionToEdit,
  selectPermissionToCreate,
  selectPermissionToDestroy,
  selectPermissionToImport,
};

export default selectors;
