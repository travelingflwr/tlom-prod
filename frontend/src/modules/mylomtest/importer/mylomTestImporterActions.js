import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/mylomtest/importer/mylomTestImporterSelectors';
import MylomTestService from 'modules/mylomtest/mylomTestService';
import fields from 'modules/mylom/importer/mylomImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'MYLOMTEST_IMPORTER',
  selectors,
  MylomTestService.import,
  fields,
  i18n('entities.mylomtest.importer.fileName'),
);
