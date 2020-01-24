import React, { Component } from 'react';
import MyListListFilter from 'view/mylist/list/myListListFilter';
import MyListListTable from 'view/mylist/list/myListListTable';
import MyListListToolbar from 'view/mylist/list/myListListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class myListListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.mylist.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.pmylist.list.title')}
          </PageTitle>

          <MyListListToolbar />
          <MyListListFilter />
          <MyListListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default myListListPage;
