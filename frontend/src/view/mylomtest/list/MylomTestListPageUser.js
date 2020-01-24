import React, { Component } from 'react';
import { connect } from 'react-redux';
import MylomListFilter from 'view/mylom/list/MylomListFilter';
import MylomListFilterUser from 'view/mylom/list/MylomListFilter';
import HiveListFilter from 'view/hive/list/HiveListFilter';
import ListListFilter from 'view/list/list/ListListFilter';
import TaskListFilter from 'view/task/list/TaskListFilter';
import MylomListTableUser from 'view/mylom/list/MylomListTableUser';
import MylomListToolbarUser from 'view/mylom/list/MylomListToolbarUser';
import HiveListTableUser from 'view/hive/list/HiveListTable';
import HiveListToolbarUser from 'view/hive/list/HiveListToolbar';
import ListListTableUser from 'view/list/list/ListListTable';
import ListListToolbarUser from 'view/list/list/ListListToolbar';
import TaskListTableUser from 'view/task/list/TaskListTable';
import TaskListToolbarUser from 'view/task/list/TaskListToolbar';
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
import firebase from 'firebase';

var db = firebase.firestore();

var currentUser = firebase.auth().currentUser.uid;
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




/* let userQuery = mylomsRef.where('user', '==', '0159d6b87143457f73bdc0b7cf41b839').get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.user, '=>', doc.data());
      console.log(doc.id);
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  }); */




// var mylomUser = db.collection("mylom").doc.user;

// console.log(mylomUser);
// var gooby = firebase.firestore().collection("mylom");
// console.log(gooby);

// var docRef = db.collection("mylom").doc("user");
// console.log(docRef);

// Works up to this point

// var userRef = db.collection("mylom");

// console.log(userIdRef);
// var statusRef = db.collection("mylom");
// console.log(userRef);
// console.log(statusRef);

// var query = userRef.where("state", "==", "CA");
// var query = statusRef.where("status", "==", "active");

// console.log(query);

// var query = userRef();
// console.log(query);

// var query = userRef.where("user", "==", currentUser);
// var query = userRef();
// console.log(query);

/* query.get().then(function(results) {
  console.log(results);

  results.forEach(function (doc) {
    console.log("Document data:", doc.data().user);
  });

  if(results.empty) {
    console.log("No documents found!");
       
  } else {
    // go through all results
    results.forEach(function (doc) {
      console.log("Document data:", doc.data());
    });

    // or if you only want the first result you can also do something like this:
    console.log("Document data:", results.docs[0].data());
  }
}).catch(function(error) {
    console.log("Error getting documents:", error);
    
});  */

class MylomListPageUser extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.mylomuser.menu')],
          ]}
        />

        <ContentWrapper>
          

          <div className="jumbotron" style={{ backgroundImage: `url(${cloudbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <PageTitle>
              {i18n('entities.mylomuser.list.title')}
            </PageTitle>
            
            <Logo>
              <h3>{this.props.userFirstNameText}'s tool for navigating major life changes</h3>
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
                className="col-xs-12 col-sm-12 "
              >
                <div className="bg-white p-4">
                  <h3>{this.props.userFirstNameText}'s Lists of Minimums (LoM's)</h3>
                  
              
                </div>
              </div>
            </div>
            
            <div className="row no-gutters">
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  paddingBottom: '12px',
                }}
                className="col-xs-12 col-sm-12 "
              >
                <div className="bg-white p-4 border">
                  <h3>{this.props.userFirstNameText}'s LoM Groups</h3>
                  
                </div>
              </div>
            </div>

            <div className="row no-gutters">
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  paddingBottom: '12px',
                }}
                className="col-xs-12 col-sm-12 "
              >
                <div className="bg-white p-4 border">
                  <h3>{this.props.userFirstNameText}'s LoM Lists</h3>
                  
                </div>
              </div>
            </div>

            <div className="row no-gutters">
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  paddingBottom: '12px',
                }}
                className="col-xs-12 col-sm-12 "
              >
                <div className="bg-white p-4 border">
                  <h3>{this.props.userFirstNameText}'s LoM Tasks</h3>
                  
                </div>
              </div>
            </div>

          </div>

          

          

          

          
          
          
        </ContentWrapper>
      </React.Fragment>
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

export default connect(select)(MylomListPageUser);
