import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ListView from 'view/list/view/ListView';
import { i18n } from 'i18n';
import actions from 'modules/list/view/listViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/list/view/listViewSelectors';
import ListViewToolbar from 'view/list/view/ListViewToolbar';

class ListPage extends Component {
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
            [i18n('entities.list.menu'), '/list'],
            [i18n('entities.list.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.list.view.title')}
          </PageTitle>

          <ListViewToolbar match={this.props.match} />

          <ListView
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

export default connect(select)(ListPage);
