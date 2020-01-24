import React, { Component } from 'react';
import ListListFilter from 'view/list/list/ListListFilter';
import ListListTable from 'view/list/list/ListListTable';
import ListListToolbar from 'view/list/list/ListListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ListListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.list.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.list.list.title')}
          </PageTitle>

          <ListListToolbar />
          <ListListFilter />
          <ListListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ListListPage;
