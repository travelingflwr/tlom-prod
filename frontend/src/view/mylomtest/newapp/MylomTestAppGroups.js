import React, { Component } from 'react';
// import './MylomTestApp.css';
import firebase from 'firebase';
import table from 'bootstrap';
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
import MylomTestListTable from 'view/mylomtest/list/MylomTestListTable';


var db = firebase.firestore();

// import db from './createStore'



const currentUser = firebase.auth().currentUser.uid;
const currentUserEmail = firebase.auth().currentUser.email;
const mylomRef = db.collection("mylomtest");
const mylomGroupRef = db.collection("mylomgrouptest");
const mylomListRef = db.collection("mylomlisttest");
const mylomTaskRef = db.collection("mylomtasktest");
const mylomOwnerRef = db.collection("mylomtest").where("mylomOwner", "==", currentUser);

// const mylomOwnerTest = mylomRef

console.log(currentUser);
console.log(currentUserEmail);
console.log(mylomOwnerRef);


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



class MylomTestGroupApp extends Component {
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
      mylomName: this.state.mylom,
      // description: this.state.mylom.description,
      createdAt:(new Date()).getTime(),
      completed: false,
      mylomOwner: currentUser,
      mylomOwnerEmail: currentUserEmail,
      id: ref.id 
    })
    .then(function(docRef) {
      console.log(docRef)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  addMylomGroup = (e) => {
    e.preventDefault()

    const ref = mylomGroupRef.doc()
    ref.set({
      groupName: this.state.mylomGroup,
      // description: this.state.mylom.description,
      createdAt:(new Date()).getTime(),
      completed: false,
      mylomOwner: currentUser,
      mylomOwnerEmail: currentUserEmail,
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
    mylomRef.where("mylomOwner", "==", firebase.auth().currentUser.uid).orderBy('createdAt').onSnapshot((docSnapShot) => {
      let myloms = []
      docSnapShot.forEach(doc => {
        console.log(doc.mylomOwnerRef, '=>', doc.data());
        myloms.push(doc.data())})
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
          
          <h5 class="mb-1">{mylom.mylomName}</h5>
          <small>{mylom.mylomOwner}</small>
          <span class="badge badge-warning badge-pill">14</span>
          <button value={mylom.id} className="btn btn-sm btn-warning" onClick={this.deleteMylom}>X</button>
        </li>
        
      )
    })

    return (
      <ul className="list-group mt-2">
        {ListItem}
      </ul>
    )
  }

  renderMylomTable () {
    const ListItem = this.state.myloms.map((mylom, index) => {
      return (

       
        
        <tr class="bg-white" key={index}>
          <th scope="row">{mylom.mylomName}</th>
          <td><span class="badge badge-warning badge-pill">14</span></td>
          <td>{mylom.completed.value}</td>
          <td>
            <button value={mylom.id} className="btn btn-sm btn-warning" onClick={this.deleteMylom}>Delete</button>{" "}
            <button value={mylom.id} className="btn btn-sm btn-warning disabled" onClick={this.deleteMylom}>Edit</button>{" "}
            <button value={mylom.id} className="btn btn-sm btn-warning disabled" onClick={this.deleteMylom}>View</button>
          </td>
        </tr>
        
      )
    })

    return (
      <table class="table table-sm table-responsive-md table-light">

        <thead class="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Sub Items</th>
            <th scope="col">Completed?</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ListItem}
        </tbody>
      </table>
    )
  }

  render() {
    console.log(this.state)
    return (
      
      <div className="MylomTestAppNew">
        
        {this.renderMylomTable()}
        <br />
        <div className="row no-gutters">
        <form onSubmit={this.addMylom}>
          <div className="input-group">
          <div class="form-group row">
            <label for="mylomName"><b>Mylom Name</b></label>
            <div class="col-sm-10">
              <input type="text" class="form-control" onChange={this.handleChange} id="mylomName" name="mylom" />
            </div>
          </div>
          
          </div>
          <button className="btn btn-warning btn-lg" type="submit" onClick={this.addMylom}>Add Mylom</button>
          
        </form>
        </div>
        
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