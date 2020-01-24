import React, { Component } from 'react';
import MylomTestListFilter from 'view/mylomtest/list/MylomTestListFilter';
import MylomTestListTable from 'view/mylomtest/list/MylomTestListTable';
import MylomTestListToolbar from 'view/mylomtest/list/MylomTestListToolbar';
import MylomTestApp from 'view/mylomtest/newapp/MylomTestApp';
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
            [i18n('entities.mylomtest.menu')],
          ]}
        />

        <ContentWrapper>
            

          
          <MylomTestApp />
          <MylomTestListFilter />
          <MylomTestListTable />
          <MylomTestListToolbar />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default MylomTestListPage;
