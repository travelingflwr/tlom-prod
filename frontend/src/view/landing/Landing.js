// import { Formik } from 'formik';
// import actions from 'modules/auth/authActions';
// import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from 'view/landing/styles/Content';
import Logo from 'view/landing/styles/Logo';
import OtherActions from 'view/landing/styles/OtherActions';
// import SignupPageWrapper from 'view/landing/styles/SignupPageWrapper';
import LandingWrapper from 'view/landing/styles/LandingWrapper';
import SocialButtons from 'view/landing/styles/SocialButtons';
// import I18nFlags from 'view/layout/I18nFlags';
/* import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem'; */
import FormSchema from 'view/shared/form/formSchema';
import ButtonIcon from 'view/shared/ButtonIcon';
import ButtonLink from 'view/shared/styles/ButtonLink';
import cloudbg from "view/home/tlom-new-hero.svg";
import Button from "bootstrap";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardSubHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink
} from "./styles/Card";


// const { fields } = model;

class Landing extends Component {
  /* schema = new FormSchema(fields.id, [
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
  }; */

  render() {
    return (

      <LandingWrapper>
        
        <Content>

        <div className="jumbotron" style={{ backgroundImage: `url(${cloudbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          
          <Logo>
            <h1>{i18n('app.title')}</h1>
            <h3>The tool for navigating major life changes</h3>
            <br />
            
          </Logo>

          <div className="row no-gutters">
            
            <div
              style={{
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingBottom: '24px',
              }}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-6 "
            >
              <Link
              className="btn btn-lg btn-landing"
              to="/auth/signup"
              >
                <b>Create an Account</b>
              </Link>
            </div>
            <div
              style={{
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingBottom: '24px',
              }}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-6 "
            >
              <Link
              className="btn btn-lg btn-landing"
              to="/auth/signin"
            >
              <b>Sign In</b>
            </Link>
            </div>
          </div>

          

          <SocialButtons>
              <a href="https://facebook.com/listofminimums" target="_blank" rel="noopener noreferrer" >
                <i
                  className="fab fa-facebook"
                  type="facebook"
                  style={{
                    color: '#3B5998',
                  }}
                />
              </a>

              <a href="https://twitter.com/listofminimums" target="_blank" rel="noopener noreferrer" >
                <i
                  className="fab fa-twitter"
                  type="facebook"
                  style={{
                    color: '#1DA1F2',
                  }}
                />
              </a>

              <a href="https://instagram.com/listofminimums" target="_blank" rel="noopener noreferrer" >
                <i
                  className="fab fa-instagram"
                  type="instagram"
                  style={{
                    color: '#e95950',
                  }}
                />
              </a>
              
            </SocialButtons>
          
        </div>

        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 "
          >
            <div className="bg-white p-2">
              <h2>About</h2>
              <center><h3>Sub-heading</h3></center>
              <center><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></center>
              
              <OtherActions>
                <Link
                  className="btn btn-sm btn-landing"
                  to="/about"
                >
                  <b>Learn More</b>
                </Link>
              </OtherActions>
            </div>
          </div>

          

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 "
          >
            <div className="bg-white p-2">
              <h2>Be Inspired</h2>
              <center><h3>Sub-heading</h3></center>
              <center><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></center>

              <OtherActions>
                <Link
                className="btn btn-lg btn-landing"
                to="/beinspired"
                >
                  <b>Inspire Me</b>
                </Link>
              </OtherActions>
            </div>
          </div>
        </div>
        

        
        </Content>
        <br /> <br />  
        
        
        
            
      </LandingWrapper>
      
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
});

export default connect(select)(Landing);
