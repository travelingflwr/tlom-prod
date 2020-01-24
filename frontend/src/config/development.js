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
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/api`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
