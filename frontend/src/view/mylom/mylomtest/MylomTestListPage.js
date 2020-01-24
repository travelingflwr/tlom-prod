import React, { Component } from 'react';
import MylomTestListFilter from 'view/mylom/list/MylomTestListFilter';
import MylomTestListTable from 'view/mylom/list/MylomTestListTable';
import MylomTestListToolbar from 'view/mylom/list/MylomTestListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class MylomTestListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.mylom.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.mylom.list.title')}
          </PageTitle>

          <MylomTestListToolbar />
          <MylomTestListFilter />
          <MylomTestListTable />
          <MylomTestApp />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default MylomTestListPage;
