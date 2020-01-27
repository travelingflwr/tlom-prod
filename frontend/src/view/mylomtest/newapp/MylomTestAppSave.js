import React, { Component } from 'react';
// import './MylomTestApp.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import cloudbg from "view/home/tlom-new-hero.svg";
import Logo from 'view/landing/styles/Logo';
import SocialButtons from 'view/landing/styles/SocialButtons';
import { Link } from 'react-router-dom';
import OtherActions from 'view/landing/styles/OtherActions';
import authSelectors from 'modules/auth/authSelectors';




var db = firebase.firestore();

// import db from './createStore'

const mylomRef = db.collection("mylomtest");

const currentUser = firebase.auth().currentUser.uid;

console.log(currentUser);


var randy = db.collection('user');
console.log(randy);
console.log(currentUser); // 1CBpTc87GKTAGweJDX2fa9adwVP2

/* I want to find the user doc that contains my uid from current user and return the 
  the id from the doc.

  I then want to take the id returns and query all myloms for a match on the user field
*/

// My user record in users - 0159d6b87143457f73bdc0b7cf41b839
// document name in users collection - 0159d6b87143457f73bdc0b7cf41b839
// authenticationID in user record - 1CBpTc87GKTAGweJDX2fa9adwVP2
// user id in mylom record - 0159d6b87143457f73bdc0b7cf41b839

/* firestore.collection("categories").valueChanges().map(document => {
  return document(a => {
    const data = a.payload.doc.data();//Here is your content
    const id = a.payload.doc.id;//Here is the key of your document
    return { id, ...data };
  }); */

/* var mindy = db.collection('user').valueChanges().map(document => {
  return document(a => {
    const data = a.payload.doc.data();//Here is your content
    const id = a.payload.doc.id;//Here is the key of your document
    return { id, ...data };
  })
}); */

/* let mindy = db.collection('user').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data()); // For data inside doc
            console.log(doc.id); // For doc name
    }
}; */

let mindy = db.collection('user').doc('id').get();

console.log(mindy);

// let mork = db.collection('user').where('uid', '=', firebase.auth().currentUser.uid).get();

// console.log(mork);



const snapshot = db.collection("mylom").get();
// console.log(snapshot);



let userDbRef = db.collection('user');
let ownerRef = userDbRef.doc('id');
console.log(userDbRef);
console.log(ownerRef);
let mylomsRef = db.collection('mylom');
// let query = mylomsRef.where('user', '==', '17c4f065b58f3a5d76c595a036a6381b').get()

// let uidQuery = mylomsRef.



let uidQuery = userDbRef.where('authenticationUid', '==', currentUser).get()
.then(snapshot => {
  
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }  

  snapshot.forEach(doc => {
    // console.log(doc.id, '=>', doc.data());
    console.log(doc.id);
    
    let userQuery = mylomsRef.where('user', '==', '0159d6b87143457f73bdc0b7cf41b839').get()
      .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        console.log(doc.user, '=>', doc.data());
        
        
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });




  });
})
.catch(err => {
  console.log('Error getting documents', err);
});



class MylomTestApp extends Component {
  constructor () {
    super()
    this.state = {
      myloms: []
    }
  }

  addMylom = (e) => {
    e.preventDefault()

    const ref = mylomRef.doc()
    ref.set({
      topmylom: this.state.mylom,
      createdAt:(new Date()).getTime(),
      done: false,
      user: currentUser,
      id: ref.id
    })
    .then(function(docRef) {
      console.log(docRef)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  

  deleteMylom = (e) => {
    mylomRef.doc(e.target.value).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }

  handleChange = (e) => {
    const t = e.target
    this.setState({
      [t.name]: t.value
    })
  }

  componentWillMount () {
    mylomRef.orderBy('createdAt').onSnapshot((docSnapShot) => {
      let myloms = []
      docSnapShot.forEach(doc => {myloms.push(doc.data())})
      this.setState({
        myloms,
        loaded: true
      })
    })
  }

  renderMylomList () {
    const ListItem = this.state.myloms.map((mylom, index) => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
          {mylom.topmylom}
          <button value={mylom.id} className="btn btn-sm btn-danger" onClick={this.deleteMylom}>X</button>
        </li>
      )
    })

    return (
      <ul className="list-group mt-2">
        {ListItem}
      </ul>
    )
  }

  render() {
    console.log(this.state)
    return (
      
      <div className="MylomTestApp">
        
        <React.Fragment>
        
        <ContentWrapper>

          <div className="jumbotron" style={{ backgroundImage: `url(${cloudbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <PageTitle>
              <center>{i18n('entities.mylomuser.list.title')}</center>
            </PageTitle>

            <Logo>
              <h3>My tool for navigating major life changes</h3>
              <br />
            </Logo>

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
            <br />

            <div className="row no-gutters">
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  paddingBottom: '12px',
                }}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6 "
              >
                <div className="bg-white p-4">
                  <h3>{this.props.userFirstNameText}'s Lists of Minimums (LoM's)</h3>
                  
                  <form onSubmit={this.addMylom}>
                    <div className="input-group">
                      <input type="text" onChange={this.handleChange} name="mylom" />
                      <button className="btn btn-primary" type="submit" onClick={this.addMylom}>Add Mylom</button>
                    </div>
                  </form>
                  
                    {this.renderMylomList()}
              
                </div>
              </div>
            </div>
          </div>
          
        
        
        
        </ContentWrapper>
        </React.Fragment>
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

export default MylomTestApp;