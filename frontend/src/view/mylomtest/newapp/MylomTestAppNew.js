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

const ideas = [
  {"title": "First idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
  {"title": "Second idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
  {"title": "Third idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"}
]



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
      mylomName: this.state.mylom,
      description: "",
      createdAt:(new Date()).getTime(),
      completed: false,
      groupsArray: [{groupName: "Group 1", listArray: [{listName: "List 1", taskArray: [{taskName: "Task 1"}]}]}],
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

  addMylomGroup = (e) => {
    e.preventDefault()

    const ref = mylomRef.doc()
    ref.set({
      mylomName: this.state.mylom,
      description: "",
      createdAt:(new Date()).getTime(),
      completed: false,
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
        
        <li className="list-group-item-lom d-flex justify-content-between align-items-center" key={index}>
          
          
          <h5 className="mb-1" >{mylom.mylomName}</h5> {'  '}
          <span className="badge badge-secondary badge-pill btn-primary btn-home">14 projects</span> {'  '}
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="item edit group">
              <button value={mylom.id} className="btn btn-primary btn-sm " onClick={this.deleteMylom}>Delete</button>
              <button value={mylom.id} className="btn btn-sm btn-primary disabled " onClick={this.editMylom}>Edit</button>
              <button value={mylom.id} className="btn btn-sm btn-primary disabled " onClick={this.viewMylom}>View</button>
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

  renderMylomAccordion () {
    
    const ListItem = this.state.myloms.map((mylom, index) => {
      var collapseTarget = "collapse" + mylom.id;
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
                  
                  <a data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} >{mylom.mylomName}</a>
                  <div class="btn-group mr-2" role="group" aria-label="item edit group">
                  
                    <button className="btn btn-primary btn-sm " data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} >Expand</button>
                    <button value={mylom.id} className="btn btn-sm btn-primary disabled " onClick={this.editMylom}>Edit</button>
                    <button value={mylom.id} className="btn btn-primary btn-sm " onClick={this.deleteMylom}>Delete</button>
                  </div>
                  
                </h6>
                <p align="left"><b>Description:</b> With supporting text below as a natural lead-in to additional content.</p>
                {/* <div class="btn-toolbar d-flex justify-content-between align-items-center" role="toolbar" aria-label="Toolbar with button groups"> */}
                
                  {/* <h3>{'    '}{mylom.mylomName} Lists</h3> */}
                
                  {/* <div class="btn-group mr-2" role="group" aria-label="item edit group"> */}
                  
                    {/* <button value={mylom.id} className="btn btn-primary btn-sm " onClick={this.deleteMylom}>Delete</button> */}
                    {/* <button value={mylom.id} className="btn btn-sm btn-primary disabled " onClick={this.editMylom}>Edit</button> */}
                    {/* <button value={mylom.id} className="btn btn-sm btn-primary disabled " onClick={this.viewMylom}>View</button> */}
                  {/* </div> */}
                  {'    '}
                {/* </div> */}
                <br />
                <div id={collapseTarget} class="collapse">
                <p align="left"> Additional content here regarding the child list.</p>
                  <ul class="list-group ">
                  
                  <li class="list-group-item-lom d-flex justify-content-between align-items-center">{mylom.mylomName} - List 1
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group mr-2" role="group" aria-label="item edit group">
                        <button value="button1" className="btn btn-primary btn-sm disabled" >Delete</button>
                        <button value="button2" className="btn btn-sm btn-primary disabled" >Edit</button>
                        <button value="button3" className="btn btn-sm btn-primary disabled" >View</button>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item-lom d-flex justify-content-between align-items-center">{mylom.mylomName} - List 1
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group mr-2" role="group" aria-label="item edit group">
                        <button value="button1" className="btn btn-primary btn-sm disabled" >Delete</button>
                        <button value="button2" className="btn btn-sm btn-primary disabled" >Edit</button>
                        <button value="button3" className="btn btn-sm btn-primary disabled" >View</button>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item-lom d-flex justify-content-between align-items-center">{mylom.mylomName} - List 1
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group mr-2" role="group" aria-label="item edit group">
                        <button value="button1" className="btn btn-primary btn-sm disabled" >Delete</button>
                        <button value="button2" className="btn btn-sm btn-primary disabled" >Edit</button>
                        <button value="button3" className="btn btn-sm btn-primary disabled" >View</button>
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
              <a className="nav-link btn-lg active" href="#landing" data-toggle="tab"><b>Landing Tab</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-lg" href="#interview" data-toggle="tab"><b>Interview Tab</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-lg" href="#profile" data-toggle="tab"><b>Profile Tab</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-lg" href="#mylom" data-toggle="tab"><b>MyLoM</b></a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade" id="mylom">
            <div className="card-body">
              <h3 className="card-title">My List of Minimums (MyLoM)</h3>
                <p className="card-text">With supporting text below as a natural lead-in to additional content. 
                With supporting text below as a natural lead-in to additional content. 
                With supporting text below as a natural lead-in to additional content. 
                With supporting text below as a natural lead-in to additional content.</p>

                <br />

                <form class="form-inline" onSubmit={this.addMylom}>
                  
                  <div className="form-group mx-sm-3 mb-2">
                      <label form="mylomName" ><h3>New Mylom Name</h3></label>
                      {/* <input type="text" className="form-control" onChange={this.handleChange} id="mylomName" name="mylom"  /> */}
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter or click button" id="mylomName" name="mylom"  />
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <button className="btn btn-home btn-lg" type="submit" onClick={this.addMylom}><b>New Mylom</b></button>
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
              <h3 className="card-title">Landing Tab</h3>
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
              <h3 className="card-title">Interview Tab</h3>
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
              <h3 className="card-title">Profile Tab</h3>
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
            <button value={mylom.id} className="btn btn-sm btn-primary " onClick={this.deleteMylom}>Delete</button>{" "}
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
      
      <div className="MylomTestAppNew">
        
        {this.renderMylomAccordion()}
        

        
        
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