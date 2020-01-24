import actions from 'modules/auth/authActions';
import selectors from 'modules/auth/authSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'view/auth/styles/Content';
import EmailUnverifiedPageWrapper from 'view/auth/styles/EmailUnverifiedPageWrapper';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import { i18n, i18nHtml } from 'i18n';
import ButtonIcon from 'view/shared/ButtonIcon';

class EmailUnverifiedPage extends Component {
  doSignout = () => {
    const { dispatch } = this.props;
    dispatch(actions.doSignout());
  };

  doSubmit = () => {
    const { dispatch } = this.props;
    dispatch(actions.doSendEmailConfirmation());
  };

  render() {
    return (
      <EmailUnverifiedPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
            <h5>The tool for navigating major life changes</h5>
          </Logo>

          <h3 style={{ textAlign: 'center' }}>
            {i18nHtml(
              'auth.emailUnverified.message',
              this.props.email,
            )}
          </h3>

          <button
            onClick={this.doSubmit}
            style={{ marginTop: '24px' }}
            type="submit"
            className="btn btn-block btn-primary"
          >
            <ButtonIcon loading={this.props.loading} />
            {i18n('auth.emailUnverified.submit')}
          </button>

          <OtherActions>
            <button
              className="btn btn-sm btn-link"
              type="button"
              onClick={this.doSignout}
            >
              {i18n('auth.signinWithAnotherAccount')}
            </button>
          </OtherActions>
        </Content>
      </EmailUnverifiedPageWrapper>
    );
  }
}

const select = (state) => ({
  email: selectors.selectCurrentUserEmail(state),
  loading: selectors.selectLoadingEmailConfirmation(state),
});

export default connect(select)(EmailUnverifiedPage);
