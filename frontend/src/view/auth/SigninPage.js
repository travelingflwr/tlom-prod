import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from 'view/auth/styles/Content';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import SigninPageWrapper from 'view/auth/styles/SigninPageWrapper';
import SocialButtons from 'view/auth/styles/SocialButtons';
import I18nFlags from 'view/layout/I18nFlags';
import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem';
import FormSchema from 'view/shared/form/formSchema';
import ButtonIcon from 'view/shared/ButtonIcon';

const { fields } = model;

class SigninPage extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.password,
    fields.rememberMe,
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
    return { email: '', password: '', rememberMe: true };
  };

  doSigninWithSocial = (provider, rememberMe) => {
    const { dispatch } = this.props;
    dispatch(actions.doSigninSocial(provider, rememberMe));
  };

  doSubmit = ({ email, password, rememberMe }) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe,
      ),
    );
  };

  render() {
    return (
      <SigninPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
            <h5>The tool for navigating major life changes</h5>
            <br />
            <p>For returning users - Please sign in</p>
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

                <div className="d-flex align-content-center form-group">
                  <div className="form-check col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={fields.rememberMe.name}
                      checked={form.values.rememberMe}
                      onChange={form.handleChange}
                    />

                    <label
                      style={{ fontSize: '14px' }}
                      className="form-check-label"
                      htmlFor={fields.rememberMe.name}
                    >
                      {fields.rememberMe.label}
                    </label>
                  </div>

                  <div className="col-6 pr-0">
                    <Link
                      style={{
                        fontSize: '14px',
                        float: 'right',
                      }}
                      to="/auth/forgot-password"
                    >
                      {i18n('auth.forgotPassword')}
                    </Link>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                >
                  <ButtonIcon
                    loading={this.props.loading}
                  />{' '}
                  {i18n('auth.signin')}
                </button>
                <br />

                <center><h5>Signin with on of the services below</h5></center>
                <SocialButtons>
                
                  <i
                    className="fab fa-facebook"
                    style={{
                      color: '#3B5998',
                    }}
                    onClick={() =>
                      this.doSigninWithSocial(
                        'facebook',
                        form.values.rememberMe,
                      )
                    }
                  />

                  <i
                    className="fab fa-google"
                    type="google"
                    style={{
                      color: '#DB4437',
                    }}
                    onClick={() =>
                      this.doSigninWithSocial(
                        'google',
                        form.values.rememberMe,
                      )
                    }
                  />

                  <i
                    className="fab fa-twitter"
                    style={{
                      color: '#1DA1F2',
                    }}
                    onClick={() =>
                      this.doSigninWithSocial(
                        'twitter',
                        form.values.rememberMe,
                      )
                    }
                  />
                </SocialButtons>

                <OtherActions>
                  <Link
                    className="btn btn-lg btn-landing"
                    to="/auth/signup"
                  >
                    <h5>{i18n('auth.createAnAccount')}</h5>
                  </Link>
                </OtherActions>

                <I18nFlags style={{ marginTop: '24px' }} />
                <br />
                <OtherActions>
                  <Link
                    className="btn btn-lg btn-landing"
                    to="/"
                  >
                    <h5>Back to langing page</h5>
                  </Link>
                </OtherActions>
              </form>
            )}
          />
        </Content>
      </SigninPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
});

export default connect(select)(SigninPage);
