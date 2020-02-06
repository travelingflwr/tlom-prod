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
// import MylomTestListTable from 'view/mylomtest/list/MylomTestListTable';
// import MylomTestListApp from 'view/mylomtest/newapp/MylomTestAppNewLists';

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
const mytaskRef = db.collection("mytasktest");
const mylomTaskRef = db.collection("mylomtasktest");
const mylomOwnerRef = db.collection("mylomtest").where("mylomOwner", "==", currentUser);
const mylistOwnerRef = db.collection("mylisttest").where("mylistOwner", "==", currentUser);
const mytaskOwnerRef = db.collection("mytasktest").where("myTaskOwner", "==", currentUser);

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



class MylomTestApp extends Component {
  constructor () {
    super()
    this.state = {
      myloms: [],
      mylists: [],
      mytasks: []
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
      mylistName: this.state.mylist,
      mylistDescription: "",
      createdAt:(new Date()).getTime(),
      completed: false,
      // groupsArray: [{groupName: "Group 1", listArray: [{listName: "List 1", taskArray: [{taskName: "Task 1"}]}]}],
      mylistOwner: currentUser,
      mylistOwnerEmail: currentUserEmail,
      mylomId: "",
      mylistId: ref.id,
      
    })
    .then(function(docRef) {
      console.log(docRef)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  addMytask = (e) => {
    e.preventDefault()

    const ref = mytaskRef.doc()
    ref.set({
      mytaskName: this.state.mytask,
      mytaskDescription: "",
      createdAt:(new Date()).getTime(),
      dueDate: Date(),
      completed: false,
      mytaskOwner: currentUser,
      mytaskOwnerEmail: currentUserEmail,
      myllistId: "",
      mytaskId: ref.id,
      parentTaskId: ref.id,
      
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

  deleteMytask = (e) => {
    mytaskRef.doc(e.target.value).delete().then(function() {
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
    mytaskRef.where("mytaskOwner", "==", firebase.auth().currentUser.uid).orderBy('createdAt').onSnapshot((docSnapShot) => {
      let mytasks = []
      docSnapShot.forEach(doc => {
        console.log(doc.mytaskOwnerRef, '=>', doc.data());
        mytasks.push(doc.data())})
      this.setState({
        mytasks,
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
              <button value={mylom.id} className="btn btn-primary btn-sm " onClick={this.deleteMylom}><i class="fas fa-trash"></i></button>
              <button value={mylom.id} className="btn btn-sm btn-primary disabled " onClick={this.editMylom}><i class="fas fa-edit"></i></button>
              <button value={mylom.id} className="btn btn-sm btn-primary disabled " onClick={this.viewMylom}><i class="fas fa-plus"></i></button>
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

  renderMylistList () {
    const MyListItem = this.state.mylists.map((mylist, index) => {
      console.log(mylist)
      return (
        
        
        <li className="list-group-item-lom d-flex justify-content-between align-items-center" key={index}>
          
          
      <h5 className="mb-1" >{mylist.mylistName} - {mylist.mylistId}</h5> {'  '}
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="item edit group">
              <button value={mylist.mylistId} className="btn btn-primary btn-sm " onClick={this.deleteMylist}><i class="fas fa-trash"></i></button>
              <button value={mylist.mylistId} className="btn btn-sm btn-primary disabled " onClick={this.editMylist}><i class="fas fa-edit"></i></button>
              <button value={mylist.mylistId} className="btn btn-sm btn-primary disabled " onClick={this.viewMylist}><i class="fas fa-plus"></i></button>
            </div>
          </div>
          
        </li>
        
      )
    })

    return (
      <ul className="list-group mt-2">
        {MyListItem}
      </ul>
    )
  }

  renderMytaskList () {
    const MyTaskItem = this.state.mytasks.map((mytask, index) => {
      console.log(mytask)
      return (
        
        
          <div
              style={{
                paddingLeft: '4px',
                paddingRight: '4px',
                paddingBottom: '4px',
                
              }}
              className="col-md-4 col-lg-4 "
            >
            <div className="card d-flex justify-content-between align-items-center bg-light mb-3" key={index} >




              <div class="card-body">
              
              <div class="d-flex w-100 justify-content-between">
                <div class="d-flex w-100 ">
                  <form>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    </div>
                  </form>
                  <h5 className="card-title" >{mytask.mytaskName}</h5> {'  '}
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <small><span class="badge badge-primary badge-pill">In Progress</span></small>
                  <small><b>Due:</b> 3 days ago</small>
                </div>

                
                
                
              </div>

              
              

              <p class="card-text mb-1" >Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>

                <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2" role="group" aria-label="item edit group">
                    <button value={mytask.mytaskId} className="btn btn-primary btn-sm " onClick={this.deleteMytask}><i class="fas fa-trash"></i></button>
                    <button value={mytask.mytaskId} className="btn btn-sm btn-primary disabled " onClick={this.editMytask}><i class="fas fa-edit"></i></button>
                    <button value={mytask.mytaskId} className="btn btn-sm btn-primary disabled " onClick={this.viewMytask}><i class="fas fa-plus"></i></button>
                  </div>
                  
                </div>
                
              
                </div>
            </div>
          </div>
        
        
      )
    })

    return (
      
      
        

        <div className="card-group mt-2">
        {MyTaskItem}
        </div>
      

      
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
                
                  
                  <a data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} ><i class="fas fa-check-square"></i>{'     '}{mylom.mylomName}</a>
                  <div class="btn-group mr-2" role="group" aria-label="item edit group">
                  
                    <button className="btn btn-primary btn-sm " data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} ><i class="fas fa-plus"></i></button>
                    <button value={mylom.id} className="btn btn-sm btn-primary disabled " onClick={this.editMylom}><i class="fas fa-edit"></i></button>
                    <button value={mylom.id} className="btn btn-primary btn-sm " onClick={this.deleteMylom}><i class="fas fa-trash"></i></button>
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

                  {/* <MylomTestListApp /> */}

                  {this.renderMylistAccordion()}
                  
                  
                  
                  
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
              <h3 className="card-title"><i class="fas fa-tasks"></i>{'     '}Your List of Minimums (MyLoM)</h3>
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

  renderMylistAccordion () {
    
    const MyListItem = this.state.mylists.map((mylist, index) => {
      var collapseTarget = "collapse" + mylist.mylistId;
      console.log(collapseTarget);

      return (

        <ContentWrapper>
        <div class="card-group-lom list-group-item-lom justify-content-between align-items-center" 
          id="listaccordion" 
          role="tablist" 
          aria-multiselectable="false" 
          key={index}>

            {/* Begin card header data outer loop */}
            
              <div class="card-header-lom">
                <h6 class="card-title-lom d-flex justify-content-between">
                
                  <a data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} ><i class="fas fa-check-square"></i>{'     '}{mylist.mylistName} - {mylist.mylistId}</a>
                  <div class="btn-group mr-2" role="group" aria-label="item edit group">
                  
                    <button className="btn btn-primary btn-sm " data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} ><i class="fas fa-plus"></i></button>
                    <button value={mylist.mylistId} className="btn btn-sm btn-primary disabled " onClick={this.editMylist}><i class="fas fa-edit"></i></button>
                    <button value={mylist.mylistId} className="btn btn-primary btn-sm " onClick={this.deleteMylist}><i class="fas fa-trash"></i></button>
                  </div>
                  
                </h6>
                <p align="left"><b>Description:</b> This is data in lists - child of mylom.</p>
                <br />
                <div id={collapseTarget} class="collapse">
                <p align="left"> Additional content here regarding the child list.</p>

                  

                  <ul class="list-group list-group-flush ">

                  {/* <MylomTestListApp /> */}

                  <div class="card-header-lom d-flex">
                  <h2>Tasks</h2>
                </div>
                <br />

                

                <form class="form-inline" onSubmit={this.addMytask}>
                  
                  <div className="form-group mx-sm-3 mb-2">
                      <label form="mytaskName" ><h3>New Task Name</h3></label>
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter or click button" id="mytaskName" name="mytask"  />
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <button className="btn btn-home btn-lg" type="submit" onClick={this.addMytask}><b>Add a New Task</b></button>
                  </div>
                  
                </form>

                  {this.renderMytaskList()}
                  
                  
                  
                  
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
        <div className="tab-content">
            <div className="card-body">
                <br />

                <form class="form-inline" onSubmit={this.addMylist}>
                  
                  <div className="form-group mx-sm-3 mb-2">
                      <label form="mylistName" ><h3>New Mylist Name</h3></label>
                      {/* <input type="text" className="form-control" onChange={this.handleChange} id="mylomName" name="mylom"  /> */}
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter or click button" id="mylistName" name="mylist"  />
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <button className="btn btn-home btn-lg" type="submit" onClick={this.addMylist}><b>New Mylist</b></button>
                  </div>
                  
                </form>
                <br />

                <div class="card-lom panel-default">
                    {MyListItem}
                </div>
            </div> {/* card body */}
        </div> {/* tab content */}


      </div>
    )
  }

  renderMytaskAccordion () {
    
    const MyTaskItem = this.state.mytasks.map((mytask, index) => {
      var collapseTarget = "collapse" + mytask.id;
      console.log(collapseTarget);

      return (

        <ContentWrapper>
        <div class="card-group-lom list-group-item-lom justify-content-between align-items-center list-group-flush" 
          id="taskaccordion" 
          role="tablist" 
          aria-multiselectable="false" 
          key={index}>

            {/* Begin card header data outer loop */}

            
            
              <div class="card-header-lom">
                <h6 class="card-title-lom d-flex justify-content-between">
                
                  <a data-toggle="collapse" data-parent="#listaccordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} ><i class="fas fa-check-square"></i>{'     '}{mytask.mytaskName}</a>
                  <div class="btn-group mr-2" role="group" aria-label="item edit group">
                  
                    <button className="btn btn-primary btn-sm " data-toggle="collapse" data-parent="#accordion" data-target={"#"+collapseTarget} aria-expanded="true" aria-controls={collapseTarget} ><i class="fas fa-plus"></i></button>
                    <button value={mytask.id} className="btn btn-sm btn-primary disabled " onClick={this.editMytask}><i class="fas fa-edit"></i></button>
                    <button value={mytask.id} className="btn btn-primary btn-sm " onClick={this.deleteMytask}><i class="fas fa-trash"></i></button>
                  </div>
                  
                </h6>
                <p align="left"><b>Description:</b> This is data in tasks - child of lists.</p>
                <br />
                <div id={collapseTarget} class="collapse">
                <p align="left"> Additional content here regarding the child list.</p>

                  

                  <ul class="list-group ">

                  {/* <MylomTestListApp /> */}

                  {/* {this.renderMytaskList()} */}
                  
                  
                  
                  
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
        <div className="tab-content">
            <div className="card-body">
                <br />
                <div class="card-header-lom d-flex">
                  <h2>Tasks</h2>
                </div>
                <br />

                

                <form class="form-inline" onSubmit={this.addMytask}>
                  
                  <div className="form-group mx-sm-3 mb-2">
                      <label form="mytaskName" ><h3>New Task Name</h3></label>
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter or click button" id="mytaskName" name="mytask"  />
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <button className="btn btn-home btn-lg" type="submit" onClick={this.addMytask}><b>Add a New Task</b></button>
                  </div>
                  
                </form>
                <br />

                <div class="card-lom panel-default">
                    {MyTaskItem}
                </div>
            </div> {/* card body */}
        </div> {/* tab content */}


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