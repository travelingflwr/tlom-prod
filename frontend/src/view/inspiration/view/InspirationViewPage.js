import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import InspirationView from 'view/inspiration/view/InspirationView';
import { i18n } from 'i18n';
import actions from 'modules/inspiration/view/inspirationViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/inspiration/view/inspirationViewSelectors';
import InspirationViewToolbar from 'view/inspiration/view/InspirationViewToolbar';

class InspirationPage extends Component {
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
            [i18n('entities.inspiration.menu'), '/inspiration'],
            [i18n('entities.inspiration.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.inspiration.view.title')}
          </PageTitle>

          <InspirationViewToolbar match={this.props.match} />

          <InspirationView
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

export default connect(select)(InspirationPage);
