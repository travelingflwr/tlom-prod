import actions from 'modules/auth/authActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18n';
import Content from 'view/auth/styles/Content';
import EmptyPermissionsPageWrapper from 'view/auth/styles/EmptyPermissionsPageWrapper';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';

class EmptyPermissionsPage extends Component {
  doSignout = () => {
    const { dispatch } = this.props;
    dispatch(actions.doSignout());
  };

  render() {
    return (
      <EmptyPermissionsPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
            <h5>The tool for navigating major life changes</h5>
          </Logo>

          <h3>{i18n('auth.emptyPermissions.message')}</h3>

          <OtherActions>
            <button
              className="btn btn-sm btn-link"
              type="button"
              onClick={this.doSignout}
            >
              {i18n('auth.signout')}
            </button>
          </OtherActions>
        </Content>
      </EmptyPermissionsPageWrapper>
    );
  }
}

export default connect(null)(EmptyPermissionsPage);
