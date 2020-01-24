import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import MylomTestView from 'view/mylomtest/view/MylomTestView';
import { i18n } from 'i18n';
import actions from 'modules/mylomtest/view/mylomTestViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/mylomtest/view/mylomTestViewSelectors';
import MylomTestViewToolbar from 'view/mylomtest/view/MylomTestViewToolbar';

class MylomTestViewPage extends Component {
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
            [i18n('entities.mylomtest.menu'), '/mylomtest'],
            [i18n('entities.mylomtest.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.mylomtest.view.title')}
          </PageTitle>

          <MylomTestViewToolbar match={this.props.match} />

          <MylomTestView
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

export default connect(select)(MylomTestViewPage);
