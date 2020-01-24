import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/mylist/importer/myListImporterSelectors';
import myListService from 'modules/mylist/myListService';
import fields from 'modules/mylist/importer/myListImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'MYLIST_IMPORTER',
  selectors,
  myListService.import,
  fields,
  i18n('entities.mylist.importer.fileName'),
);
