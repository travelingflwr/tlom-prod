import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18n';
import HomeBarChart from 'view/home/HomeBarChart';
import HomeDoughnutChart from 'view/home/HomeDoughnutChart';
import HomeRadarChart from 'view/home/HomeRadarChart';
import HomeMixChartTwo from 'view/home/HomeMixChartTwo';
import HomeMixChartOne from 'view/home/HomeMixChartOne';
import HomeHorizontalBarChart from 'view/home/HomeHorizontalBarChart';
import HomePolarChart from 'view/home/HomePolarChart';
import HomeLineChart from 'view/home/HomeLineChart';
import authSelectors from 'modules/auth/authSelectors';
import JumboBG from "./jumbo-bg-5.jpg";
import JumboBG2 from "./hero-low-3.jpg";
import CardBG from "./tlom-background.svg";
import cloudbg from "./tlom-new-hero.svg";

import SocialButtons from 'view/landing/styles/SocialButtons';
import OtherActions from 'view/landing/styles/OtherActions';
import { Link } from 'react-router-dom';

import MylomTestApp from 'view/mylomtest/newapp/MylomTestAppNew';
import MylomTestGroupApp from 'view/mylomtest/newapp/MylomTestAppGroups';
import MylomTestListApp from 'view/mylomtest/newapp/MylomTestAppLists';
import MylomTestAppWidget from 'view/mylomtest/newapp/MylomTestAppNewWidget';



class HomePage extends PureComponent {

  render() {
    

    return (
      
      <div
        style={{
          padding: 0,
          marginLeft: '-12px',
          marginRight: '-12px',
        }}
      >
        <div className="jumbotron" style={{ backgroundImage: `url(${cloudbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className="header" 
          style={{
            textAlign: 'center', 
          }}
          >Welcome to the List of Minimums {this.props.userFirstNameText}!!</h2>

          {this.props.userRolesText[0] === "guest" &&

          <center><h3>This could be <em>YOUR</em> tool for navigating major life changes</h3></center>

          }

          {((this.props.userRolesText[0] === "customer") && (this.props.userRolesText[0,1] !== "subscriber")) &&
            <center><h3>This could be <em>YOUR</em> tool for navigating major life changes</h3></center>
          }

          {((this.props.userRolesText[0] === "customer") && (this.props.userRolesText[0,1] === "subscriber")) &&
            <center><h3>This is <em>YOUR</em> tool for navigating major life changes</h3></center>
          }

          {((this.props.userRolesText[0] === "admin") || (this.props.userRolesText[0] === "owner"))  &&
            <center><h3>This is your admin page</h3></center>
          }

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

          

          {((this.props.userRolesText[0] === "guest") || 
          (this.props.userRolesText[0] === "subscriber") || (this.props.userRolesText[0] === "customer"))  &&

          <div className="row no-gutters">
            <div
              style={{
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingBottom: '24px',
                paddingTop: '48px',
              }}
              className="col-sm-12"
            >
              <br />
              <div className="bg-white p-4 border border-rounded" >
                <center><h3>This section is for you {this.props.userFirstNameText}</h3></center>
                <div className="row no-gutters">
                  <div
                        style={{
                          paddingLeft: '12px',
                          paddingRight: '12px',
                          paddingBottom: '24px',
                        }}
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                      >
                        <div className="bg-white p-2">
                          <h2>Hi {this.props.userFirstNameText}!!</h2>
                          <center><h3>You are a {this.props.userRolesText}</h3></center>
                          <center><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></center>
                          
                          <OtherActions>
                            <Link
                              className="btn btn-lg btn-warning"
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
                      className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                    >
                      <div className="bg-white p-2">
                      <h2>Your Master Lists</h2>
                      
                      </div>
                    </div>
                </div>
              </div>
              
              
            </div>
          </div>
          }
        </div>

        {((this.props.userRolesText[0] === "guest") || 
          (this.props.userRolesText[0] === "customer"))  &&

        <div className="row no-gutters">
          <div
              style={{
                paddingLeft: '3px',
                paddingRight: '3px',
                paddingBottom: '24px',
                paddingTop: '24px',
              }}
              className="col-xs-12 col-lg-12 col-md-6 col-lg-6 "
            >
              <div className="p-2">
                <center><h3>{this.props.userFirstNameText}'s Lists of Minimums (LoM's)</h3></center>
                
              </div>
            </div>
        </div>
        
        }

        {((this.props.userRolesText[0] === "owner") || 
          (this.props.userRolesText[0] === "subscriber") || (this.props.userRolesText[0] === "admin"))  &&

        <div className="row no-gutters">
          <div
              style={{
                paddingLeft: '3px',
                paddingRight: '3px',
                paddingBottom: '24px',
                paddingTop: '24px',
              }}
              className="col-xs-12 col-lg-12 col-md-6 col-lg-6 "
            >
              <div className="p-2">
                <center><h3>{this.props.userFirstNameText}'s Lists of Minimums (LoM's)</h3></center>
                <br />
                <MylomTestApp />
              </div>

              

              
            </div>
        </div>

        
        
        }



        {((this.props.userRolesText[0] === "admin") || (this.props.userRolesText[0] === "owner")) &&

        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border border-rounded">
              <HomeDoughnutChart />
              
            </div>
          </div>
          
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border border-rounded">
              <HomeMixChartTwo />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border border-rounded">
              <HomeBarChart />
            </div>
          </div>

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border border-rounded">
              <HomeMixChartOne />
            </div>
          </div>

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border border-rounded">
              <HomePolarChart />
            </div>
          </div>

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border border-rounded">
              <HomeHorizontalBarChart />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border border-rounded">
              <HomeLineChart />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border border-rounded">
              <HomeRadarChart />
            </div>
          </div>
        </div>}
        <p
          style={{
            marginTop: '16px',
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          Copywrite statement here.
        </p>

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
    );
  }
}

const select = (state) => ({
  userFirstNameText: authSelectors.selectCurrentUserFirstName(
    state,
  ),
  userRolesText: authSelectors.selectRoles(
    state,
  ),
});

export default connect(select)(HomePage);
