import React, { Component } from 'react';
import HiveListFilter from 'view/hive/list/HiveListFilter';
import HiveListTable from 'view/hive/list/HiveListTable';
import HiveListToolbar from 'view/hive/list/HiveListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class HiveListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.hive.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.hive.list.title')}
          </PageTitle>

          <HiveListToolbar />
          <HiveListFilter />
          <HiveListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default HiveListPage;
