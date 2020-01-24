const firebaseConfig = {
  apiKey: "AIzaSyC6-8v8sl0FVyzFPYs5uNjQIExwXMTHXGw",
  authDomain: "tlom-prod.firebaseapp.com",
  databaseURL: "https://tlom-prod.firebaseio.com",
  projectId: "tlom-prod",
  storageBucket: "tlom-prod.appspot.com",
  messagingSenderId: "497284269245",
  appId: "1:497284269245:web:7f95975404da98381c63d4",
  measurementId: "G-EFM753H8QN"
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
