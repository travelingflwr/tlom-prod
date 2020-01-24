import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/list/importer/listImporterSelectors';
import ListService from 'modules/list/listService';
import fields from 'modules/list/importer/listImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'LIST_IMPORTER',
  selectors,
  ListService.import,
  fields,
  i18n('entities.list.importer.fileName'),
);
