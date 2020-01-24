import React, { Component } from 'react';
import ProjectListFilter from 'view/project/list/ProjectListFilter';
import ProjectListTable from 'view/project/list/ProjectListTable';
import ProjectListToolbar from 'view/project/list/ProjectListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ProjectListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.project.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.project.list.title')}
          </PageTitle>

          <ProjectListToolbar />
          <ProjectListFilter />
          <ProjectListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ProjectListPage;
