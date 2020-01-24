import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import TagView from 'view/tag/view/TagView';
import { i18n } from 'i18n';
import actions from 'modules/tag/view/tagViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/tag/view/tagViewSelectors';
import TagViewToolbar from 'view/tag/view/TagViewToolbar';

class TagPage extends Component {
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
            [i18n('entities.tag.menu'), '/tag'],
            [i18n('entities.tag.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.tag.view.title')}
          </PageTitle>

          <TagViewToolbar match={this.props.match} />

          <TagView
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

export default connect(select)(TagPage);
