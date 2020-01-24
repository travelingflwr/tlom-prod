import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import HiveView from 'view/hive/view/HiveView';
import { i18n } from 'i18n';
import actions from 'modules/hive/view/hiveViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/hive/view/hiveViewSelectors';
import HiveViewToolbar from 'view/hive/view/HiveViewToolbar';

class HivePage extends Component {
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
            [i18n('entities.hive.menu'), '/hive'],
            [i18n('entities.hive.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.hive.view.title')}
          </PageTitle>

          <HiveViewToolbar match={this.props.match} />

          <HiveView
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

export default connect(select)(HivePage);
