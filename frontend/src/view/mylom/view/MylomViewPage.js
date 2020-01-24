import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import MylomView from 'view/mylom/view/MylomView';
import { i18n } from 'i18n';
import actions from 'modules/mylom/view/mylomViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/mylom/view/mylomViewSelectors';
import MylomViewToolbar from 'view/mylom/view/MylomViewToolbar';

class MylomPage extends Component {
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
            [i18n('entities.mylom.menu'), '/mylom'],
            [i18n('entities.mylom.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.mylom.view.title')}
          </PageTitle>

          <MylomViewToolbar match={this.props.match} />

          <MylomView
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

export default connect(select)(MylomPage);
