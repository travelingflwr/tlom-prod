import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import queryString from 'query-string';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from 'view/auth/styles/Content';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import SignupPageWrapper from 'view/auth/styles/SignupPageWrapper';
import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem';
import FormSchema from 'view/shared/form/formSchema';
import ButtonIcon from 'view/shared/ButtonIcon';

const { fields } = model;

class SignupPage extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.password,
  ]);

  componentDidMount() {
    this.clearErrorMessage();
  }

  handleChange(event, form) {
    if (this.props.errorMessage) {
      this.clearErrorMessage();
    }

    form.handleChange(event);
  }

  clearErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doClearErrorMessage());
  };

  initialValues = () => {
    return {
      email: this.emailFromInvitation() || '',
      password: '',
    };
  };

  emailFromInvitation = () => {
    return queryString.parse(this.props.location.search)
      .email;
  };

  doSubmit = ({ email, password }) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doRegisterEmailAndPassword(email, password),
    );
  };

  render() {
    return (
      <SignupPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
            <h5>The tool for navigating major life changes</h5>
            <br />
            <p>For new users - Please sign up</p>
          </Logo>

          <Formik
            initialValues={this.initialValues()}
            validationSchema={this.schema.schema}
            onSubmit={this.doSubmit}
            render={(form) => (
              <form onSubmit={form.handleSubmit}>
                <InputFormItemNotFast
                  name={fields.email.name}
                  placeholder={fields.email.label}
                  autoComplete={fields.email.name}
                  autoFocus
                  errorMessage={this.props.errorMessage}
                  form={form}
                />

                <InputFormItem
                  name={fields.password.name}
                  placeholder={fields.password.label}
                  autoComplete={fields.password.name}
                  type="password"
                />

                

                <button
                  className="btn btn-block btn-primary"
                  type="submit"
                >
                  <ButtonIcon
                    loading={this.props.loading}
                  />{' '}
                  {i18n('auth.signup')}
                </button>

                <OtherActions>
                  <Link
                    className="btn btn-sm btn-link"
                    to="/auth/signin"
                  >
                    <h5>{i18n('auth.alreadyHaveAnAccount')}</h5>
                  </Link>
                </OtherActions>
              </form>
            )}
          />
        </Content>
      </SignupPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
});

export default connect(select)(SignupPage);
