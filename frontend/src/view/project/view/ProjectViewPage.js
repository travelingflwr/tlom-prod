import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ProjectView from 'view/project/view/ProjectView';
import { i18n } from 'i18n';
import actions from 'modules/project/view/projectViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/project/view/projectViewSelectors';
import ProjectViewToolbar from 'view/project/view/ProjectViewToolbar';

class ProjectPage extends Component {
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
            [i18n('entities.project.menu'), '/project'],
            [i18n('entities.project.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.project.view.title')}
          </PageTitle>

          <ProjectViewToolbar match={this.props.match} />

          <ProjectView
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

export default connect(select)(ProjectPage);
