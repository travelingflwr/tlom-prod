import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import InspirationForm from 'view/inspiration/form/InspirationForm';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
import actions from 'modules/inspiration/form/inspirationFormActions';
import selectors from 'modules/inspiration/form/inspirationFormSelectors';
import { connect } from 'react-redux';

class InspirationFormPage extends Component {
  state = {
    dispatched: false,
  };

  componentDidMount() {
    const { dispatch, match } = this.props;

    if (this.isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      dispatch(actions.doNew());
    }

    this.setState({ dispatched: true });
  }

  doSubmit = (id, data) => {
    const { dispatch } = this.props;
    if (this.isEditing()) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  title = () => {
    return this.isEditing()
      ? i18n('entities.inspiration.edit.title')
      : i18n('entities.inspiration.new.title');
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.inspiration.menu'), '/inspiration'],
            [this.title()],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          {this.state.dispatched && (
            <InspirationForm
              saveLoading={this.props.saveLoading}
              findLoading={this.props.findLoading}
              record={
                this.isEditing() ? this.props.record : {}
              }
              isEditing={this.isEditing()}
              onSubmit={this.doSubmit}
              onCancel={() => getHistory().push('/inspiration')}
            />
          )}
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(InspirationFormPage);
