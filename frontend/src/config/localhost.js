const firebaseConfig = {
  apiKey: "AIzaSyCJH17orvVjYi83PTQyDDzMM1p4FTvbjZE",
  authDomain: "tlom-dev.firebaseapp.com",
  databaseURL: "https://tlom-dev.firebaseio.com",
  projectId: "tlom-dev",
  storageBucket: "tlom-dev.appspot.com",
  messagingSenderId: "709269482442",
  appId: "1:709269482442:web:285d246a3f13a144727d33",
  measurementId: "G-Z826JXGQCQ"
};

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/api`;

// App Engine / Debug
const backendUrl = `http://localhost:8080/api`;

export default {
  firebaseConfig,
  backendUrl,
};
