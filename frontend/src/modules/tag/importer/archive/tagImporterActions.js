import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/tag/importer/tagImporterSelectors';
import TagService from 'modules/tag/tagService';
import fields from 'modules/tag/importer/tagImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'TAG_IMPORTER',
  selectors,
  TagService.import,
  fields,
  i18n('entities.tag.importer.fileName'),
);
