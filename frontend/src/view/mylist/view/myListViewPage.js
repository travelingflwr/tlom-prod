import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import MyListView from 'view/mylist/view/myListView';
import { i18n } from 'i18n';
import actions from 'modules/mylist/view/myListViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/mylist/view/myListViewSelectors';
import MyListViewToolbar from 'view/mylist/view/myListViewToolbar';

class myListPage extends Component {
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
            [i18n('entities.mylist.menu'), '/mylist'],
            [i18n('entities.mylist.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.mylist.view.title')}
          </PageTitle>

          <myListViewToolbar match={this.props.match} />

          <myListView
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

export default connect(select)(myListPage);
