import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/mylom/importer/mylomImporterSelectors';
import MylomService from 'modules/mylom/mylomService';
import fields from 'modules/mylom/importer/mylomImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'MYLOM_IMPORTER',
  selectors,
  MylomService.import,
  fields,
  i18n('entities.mylom.importer.fileName'),
);
