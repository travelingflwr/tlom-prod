import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/subscription/importer/subscriptionImporterSelectors';
import SubscriptionService from 'modules/subscription/subscriptionService';
import fields from 'modules/subscription/importer/subscriptionImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SUBSCRIPTION_IMPORTER',
  selectors,
  SubscriptionService.import,
  fields,
  i18n('entities.subscription.importer.fileName'),
);
