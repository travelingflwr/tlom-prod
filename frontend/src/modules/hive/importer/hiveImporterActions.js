import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/hive/importer/hiveImporterSelectors';
import HiveService from 'modules/hive/hiveService';
import fields from 'modules/hive/importer/hiveImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'HIVE_IMPORTER',
  selectors,
  HiveService.import,
  fields,
  i18n('entities.hive.importer.fileName'),
);
