import React, { Component } from 'react';
import InspirationListFilter from 'view/inspiration/list/InspirationListFilter';
import InspirationListTable from 'view/inspiration/list/InspirationListTable';
import InspirationListToolbar from 'view/inspiration/list/InspirationListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class InspirationListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.inspiration.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.inspiration.list.title')}
          </PageTitle>

          <InspirationListToolbar />
          <InspirationListFilter />
          <InspirationListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default InspirationListPage;
