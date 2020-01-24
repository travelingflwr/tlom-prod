import React, { Component } from 'react';
import MylomListFilter from 'view/mylom/list/MylomListFilter';
import MylomListTable from 'view/mylom/list/MylomListTable';
import MylomListToolbar from 'view/mylom/list/MylomListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class MylomListPage extends Component {
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

          <MylomListToolbar />
          <MylomListFilter />
          <MylomListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default MylomListPage;
