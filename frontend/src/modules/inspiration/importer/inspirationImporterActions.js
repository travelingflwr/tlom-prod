import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/inspiration/importer/inspirationImporterSelectors';
import InspirationService from 'modules/inspiration/inspirationService';
import fields from 'modules/inspiration/importer/inspirationImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'INSPIRATION_IMPORTER',
  selectors,
  InspirationService.import,
  fields,
  i18n('entities.inspiration.importer.fileName'),
);
