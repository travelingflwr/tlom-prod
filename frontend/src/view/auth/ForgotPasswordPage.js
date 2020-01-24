import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from 'view/auth/styles/Content';
import ForgotPasswordPageWrapper from 'view/auth/styles/ForgotPasswordPageWrapper';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import FormSchema from 'view/shared/form/formSchema';
import ButtonIcon from 'view/shared/ButtonIcon';

const { fields } = model;

class ForgotPasswordPage extends Component {
  schema = new FormSchema(null, [fields.email]);

  initialValues = () => {
    return this.schema.initialValues();
  };

  doSubmit = ({ email }) => {
    const { dispatch } = this.props;
    dispatch(actions.doSendPasswordResetEmail(email));
  };

  render() {
    return (
      <ForgotPasswordPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
            <h5>The tool for navigating major life changes</h5>
          </Logo>

          <Formik
            initialValues={this.initialValues()}
            validationSchema={this.schema.schema}
            onSubmit={this.doSubmit}
            render={(form) => (
              <form onSubmit={form.handleSubmit}>
                <InputFormItem
                  name={fields.email.name}
                  placeholder={fields.email.label}
                  autoFocus
                  autoComplete={fields.email.name}
                />

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  <ButtonIcon
                    loading={this.props.loading}
                  />{' '}
                  {i18n('auth.passwordResetEmail.message')}
                </button>

                <OtherActions>
                  <Link
                    className="btn btn-sm btn-link"
                    to="/auth/signin"
                  >
                    {i18n('common.cancel')}
                  </Link>
                </OtherActions>
              </form>
            )}
          />
        </Content>
      </ForgotPasswordPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoadingPasswordResetEmail(state),
});

export default connect(select)(ForgotPasswordPage);
