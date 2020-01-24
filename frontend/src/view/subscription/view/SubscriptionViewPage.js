import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SubscriptionView from 'view/subscription/view/SubscriptionView';
import { i18n } from 'i18n';
import actions from 'modules/subscription/view/subscriptionViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/subscription/view/subscriptionViewSelectors';
import SubscriptionViewToolbar from 'view/subscription/view/SubscriptionViewToolbar';

class SubscriptionPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.subscription.menu'), '/subscription'],
            [i18n('entities.subscription.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.subscription.view.title')}
          </PageTitle>

          <SubscriptionViewToolbar match={this.props.match} />

          <SubscriptionView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(SubscriptionPage);
