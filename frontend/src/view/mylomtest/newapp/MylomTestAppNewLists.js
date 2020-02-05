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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faTrash, faEdit, faPlus, faTasks, faCheckSquare, faUser } from '@fortawesome/free-solid-svg-icons';





var db = firebase.firestore();

// import db from './createStore'

const ideas = [
  {"title": "First idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
  {"title": "Second idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
  {"title": "Third idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"}
]



const currentUser = firebase.auth().currentUser.uid;
const currentUserEmail = firebase.auth().currentUser.email;
const mylomRef = db.collection("mylomtest");
const mylomGroupRef = db.collection("mylomgrouptest");
const mylistRef = db.collection("mylisttest");
const mylomTaskRef = db.collection("mylomtasktest");
const mylomOwnerRef = db.collection("mylomtest").where("mylomOwner", "==", currentUser);
const mylistOwnerRef = db.collection("mylisttest").where("mylistOwner", "==", currentUser);

// const mylomOwnerTest = mylomRef

console.log(currentUser);
console.log(currentUserEmail);
console.log(mylomOwnerRef);
console.log(mylistOwnerRef);


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



class MylistTestApp extends Component {
  constructor () {
    super()
    this.state = {
      mylists: []
    }
  }

  addMylom = (e) => {
    e.preventDefault()

    const ref = mylomRef.doc()
    ref.set({
      mylomName: this.state.mylom,
      mylomDescription: "",
      createdAt:(new Date()).getTime(),
      completed: false,
      // groupsArray: [{groupName: "Group 1", listArray: [{listName: "List 1", taskArray: [{taskName: "Task 1"}]}]}],
      mylomOwner: currentUser,
      mylomOwnerEmail: currentUserEmail,
      id: ref.id,
      
    })
    .then(function(docRef) {
      console.log(docRef)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  addMylist = (e) => {
    e.preventDefault()
    const ref = mylistRef.doc()
    ref.set({
      // mylistName: this.state.mylist,
      mylistName: "",
      mylistDescription: "",
      createdAt:(new Date()).getTime(),
      completed: false,
      // groupsArray: [{groupName: "Group 1", listArray: [{listName: "List 1", taskArray: [{taskName: "Task 1"}]}]}],
      mylistOwner: currentUser,
      mylistOwnerEmail: currentUserEmail,
      // mylomId: this.state.mylom,
      mylistId: ref.id,
      
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

  deleteMylist = (e) => {
    mylistRef.doc(e.target.value).delete().then(function() {
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
    mylistRef.where("mylistOwner", "==", firebase.auth().currentUser.uid).orderBy('createdAt').onSnapshot((docSnapShot) => {
      let mylists = []
      docSnapShot.forEach(doc => {
        console.log(doc.mylistOwnerRef, '=>', doc.data());
        mylists.push(doc.data())})
      this.setState({
        mylists,
        loaded: true
      })
    })
  }

  renderMylistList () {
    const ListItem = this.state.mylists.map((mylist, index) => {
      console.log(mylist)
      return (
        
        
        <li className="list-group-item-lom d-flex justify-content-between align-items-center" key={index}>
          
          
          <h5 className="mb-1" >{mylist.mylistName}</h5> {'  '}
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="item edit group">
              <button value={mylist.id} className="btn btn-primary btn-sm " onClick={this.deleteMylist}><i class="fas fa-trash"></i></button>
              <button value={mylist.id} className="btn btn-sm btn-primary disabled " onClick={this.editMylist}><i class="fas fa-edit"></i></button>
              <button value={mylist.id} className="btn btn-sm btn-primary disabled " onClick={this.viewMylist}><i class="fas fa-plus"></i></button>
            </div>
          </div>
          
        </li>
        
      )
    })

    return (
      <ul className="list-group mt-2">
        {ListItem}
      </ul>
    )
  }

  renderMylistAccordion () {
    
    const ListItem = this.state.mylists.map((mylist, index) => {
      var collapseTarget = "collapse" + mylist.id;
      console.log(collapseTarget);

      return (

        <ContentWrapper>


                    
        <div class="card-group-lom list-group-item-lom justify-content-between align-items-center" 
          id="accordion" 
          role="tablist" 
          aria-multiselectable="false" 
          key={index}>

            {/* Begin card header data outer loop */}
            
              <div class="card-header-lom">
                <h6 class="card-title-lom d-flex justify-content-between">
                
                  
                  <a data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} ><i class="fas fa-check-square"></i>{'     '}{mylist.mylistName}</a>
                  <div class="btn-group mr-2" role="group" aria-label="item edit group">
                  
                    <button className="btn btn-primary btn-sm " data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} ><i class="fas fa-plus"></i></button>
                    <button value={mylist.id} className="btn btn-sm btn-primary disabled " onClick={this.editMylist}><i class="fas fa-edit"></i></button>
                    <button value={mylist.id} className="btn btn-primary btn-sm " onClick={this.deleteMylist}><i class="fas fa-trash"></i></button>
                  </div>
                  
                </h6>
                <p align="left"><b>Description:</b> With supporting text below as a natural lead-in to additional content.</p>
                
                <br />
                <div id={collapseTarget} class="collapse">
                <p align="left"> Additional content here regarding the child list.</p>

                  <form class="form-inline" onSubmit={this.addList}>
                    
                    <div className="form-group mx-sm-3 mb-2">
                        <label form="listName" ><h3>New List Name</h3></label>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                      <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter or click button" id="listName" name="list"  />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                      <button className="btn btn-home btn-lg" type="submit" onClick={this.addList}><b>New List</b></button>
                    </div>
                    
                  </form>

                  <ul class="list-group ">
                  
                  <li class="list-group-item-lom d-flex justify-content-between align-items-center">{mylist.mylistName} - Task 1
                  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group mr-1" role="group" aria-label="item edit group">
                        <button value="button1" className="btn btn-primary btn-sm disabled" ><i class="fas fa-trash"></i></button>
                        <button value="button2" className="btn btn-sm btn-primary disabled" ><i class="fas fa-edit"></i></button>
                        <button value="button3" className="btn btn-sm btn-primary disabled" ><i class="fas fa-plus"></i></button>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item-lom d-flex justify-content-between align-items-center">{mylist.mylistName} - Task 2
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group mr-2" role="group" aria-label="item edit group">
                        <button value="button1" className="btn btn-primary btn-sm disabled" ><i class="fas fa-trash"></i></button>
                        <button value="button2" className="btn btn-sm btn-primary disabled" ><i class="fas fa-edit"></i></button>
                        <button value="button3" className="btn btn-sm btn-primary disabled" ><i class="fas fa-plus"></i></button>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item-lom d-flex justify-content-between align-items-center">{mylist.mylistName} - Task 3
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group mr-2" role="group" aria-label="item edit group">
                        <button value="button1" className="btn btn-primary btn-sm disabled" ><i class="fas fa-trash"></i></button>
                        <button value="button2" className="btn btn-sm btn-primary disabled" ><i class="fas fa-edit"></i></button>
                        <button value="button3" className="btn btn-sm btn-primary disabled" ><i class="fas fa-plus"></i></button>
                      </div>
                    </div>
                  </li>
                  </ul>
                </div>
                
              </div>

          {/* End card header data outer loop */}
        </div>
        </ContentWrapper>
        
      )
    })

    return (
      <div className="card text-center">
        <div className="card-header" style={{  backgroundImage: `url(${cloudbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <ul className="nav nav-tabs card-header-tabs justify-content-center" >
            <li className="nav-item">
              <a className="nav-link btn-lg active" href="#landing" data-toggle="tab"><b><FontAwesomeIcon icon={faHome} />{'     '}Home</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-lg" href="#interview" data-toggle="tab"><b><i class="fas fa-coffee"></i>{'     '}Interview</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-lg" href="#profile" data-toggle="tab"><b><i class="fas fa-user"></i>{'     '}Profile</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-lg" href="#mylom" data-toggle="tab"><b><i class="fas fa-tasks"></i>{'     '}MyLoM</b></a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade" id="mylom">
            <div className="card-body">
              <h3 className="card-title"><i class="fas fa-tasks"></i>{'     '}Your Lists </h3>
                <p className="card-text">With supporting text below as a natural lead-in to additional content. 
                With supporting text below as a natural lead-in to additional content. 
                With supporting text below as a natural lead-in to additional content. 
                With supporting text below as a natural lead-in to additional content.</p>

                <br />

                <form class="form-inline" onSubmit={this.addMylist}>
                  
                  <div className="form-group mx-sm-3 mb-2">
                      <label form="mylistName" ><h3>New List Name</h3></label>
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter or click button" id="mylistName" name="mylist"  />
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <button className="btn btn-home btn-lg" type="submit" onClick={this.addMylist}><b>New List</b></button>
                  </div>
                  
                </form>

                
                  
                  
                <br />

                

                

                <div class="card-lom panel-default">
                    {ListItem}
                </div>
            </div>
          </div>

          {/* Begin Landing tab content */}
          <div className="tab-pane fade show active" id="landing">
            <div className="card-body">
              <h3 className="card-title"><FontAwesomeIcon icon={faHome} />{'     '}Home</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content.</p>

              <br />
                <a href="#" className="btn btn-lg btn-home"><b>Go somewhere</b></a>
              <br />
            </div>
          </div>
          {/* End Landing tab content */}

          {/* Begin Interview tab content */}
          <div className="tab-pane fade " id="interview">
            <div className="card-body">
              <h3 className="card-title"><i class="fas fa-coffee"></i>{'     '}Your Interview</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content.</p>

              <br />
                <a href="#" className="btn btn-lg btn-home"><b>Go somewhere</b></a>
              <br />
            </div>
          </div>
          {/* End Interview tab content */}

          {/* Begin Profile tab content */}
          <div className="tab-pane fade " id="profile">
            <div className="card-body">
              <h3 className="card-title"><i class="fas fa-user"></i>{'     '}Your Profile</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content. 
              With supporting text below as a natural lead-in to additional content.</p>

              <br />
                <a href="#" className="btn btn-lg btn-home"><b>Go somewhere</b></a>
              <br />
            </div>
          </div>
          {/* End Profile tab content */}


        </div>
      </div>
    )
  }

  renderGroupList () {

    const data = [
      { value: "Group 1", key: "0" },
      { value: "Group 2", key: "1" },
      { value: "Group 3", key: "2" },
      { value: "Group 4", key: "3" },
    ];

    var ideas = [
      {"title": "First idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
      {"title": "Second idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
      {"title": "Third idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"}
    ]

    
    // const GroupItem = this.state.myloms.groupsArray.map((item, index) => {
    // const GroupItem = this.state.myloms.map((item, index) => {
    const GroupItem = data.map((item, index) => {

    // const GroupItem = this.state.myloms.map(({mylom, groupsArray}, index) => {
  
      return (

        <li className=" d-flex justify-content-between align-items-center" key={index}>
          
          
        </li>
        
      )
    })

    return (
      <ul className="list-group mt-2">
        {GroupItem}
      </ul>
    )
  }

  renderMylomTable () {
    const TableItem = this.state.myloms.map((mylom, index) => {
      return (

       
        
        <tr className="bg-white" key={index}>
          <th scope="row">{mylom.mylomName}</th>
          <td><span className="badge badge-light badge-pill">14</span></td>
          
          <td>
              {mylom.groupsArray.toString()}
            
          </td>

          
          
          
          <td>{mylom.completed}</td>
          <td>
            <button value={mylom.id} className="btn btn-sm btn-primary " onClick={this.deleteMylom}><i class="fas fa-trash"></i></button>{" "}
            <button value={mylom.id} className="btn btn-sm btn-primary disabled" onClick={this.deleteMylom}>Edit</button>{" "}
            <button value={mylom.id} className="btn btn-sm btn-primary disabled" onClick={this.deleteMylom}>View</button>
          </td>
        </tr>
        
      )
    })

    return (
      <table className="table table-sm table-responsive-md table-light">

        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Sub Items</th>
            <th scope="col">Groups</th>
            <th scope="col">Completed?</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {TableItem}
        </tbody>
      </table>
    )
  }

  render() {
    console.log(this.state)

    var ideas = [
      {"title": "First idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
      {"title": "Second idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
      {"title": "Third idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"}
    ]
    
    return (
      
      <div className="MylomTestAppNewLists">

        <form class="form-inline" onSubmit={this.addMylist}>
                    
          <div className="form-group mx-sm-3 mb-2">
              <label form="listName" ><h3>New List Name</h3></label>
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter or click button" id="listName" name="mylist"  />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <button className="btn btn-home btn-lg" type="submit" onClick={this.addMylist}><b>New List</b></button>
          </div>
          
        </form>
        
        {this.renderMylistList()}
        

        
        
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

export default MylistTestApp;