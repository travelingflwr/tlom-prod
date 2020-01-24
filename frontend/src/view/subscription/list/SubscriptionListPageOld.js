import React, { Component } from 'react';
import SubscriptionListFilter from 'view/subscription/list/SubscriptionListFilter';
import SubscriptionListTable from 'view/subscription/list/SubscriptionListTable';
import SubscriptionListToolbar from 'view/subscription/list/SubscriptionListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class SubscriptionListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.subscription.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.subscription.list.title')}
          </PageTitle>

          <SubscriptionListToolbar />
          <SubscriptionListFilter />
          <SubscriptionListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default SubscriptionListPage;
