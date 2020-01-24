import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/project/importer/projectImporterSelectors';
import ProjectService from 'modules/project/projectService';
import fields from 'modules/project/importer/projectImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'PROJECT_IMPORTER',
  selectors,
  ProjectService.import,
  fields,
  i18n('entities.project.importer.fileName'),
);
