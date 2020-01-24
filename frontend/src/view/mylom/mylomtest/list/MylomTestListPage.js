import React, { Component } from 'react';
import MylomTestListFilter from 'view/mylom/mylomtest/list/MylomTestListFilter';
import MylomTestListTable from 'view/mylom/mylomtest/list/MylomTestListTable';
import MylomTestListToolbar from 'view/mylom/mylomtest/list/MylomTestListToolbar';
import MylomTestApp from 'view/mylom/mylomtest/MylomTestApp';
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
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default MylomTestListPage;
