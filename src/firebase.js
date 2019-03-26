import app from 'firebase/app';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAY0TFsblSEcIEwNkL5uJReFuXFmU5aVGg",
    authDomain: "cactus-338da.firebaseapp.com",
    databaseURL: "https://cactus-338da.firebaseio.com",
    projectId: "cactus-338da",
    storageBucket: "cactus-338da.appspot.com",
    messagingSenderId: "302021543806"
  };
  app.initializeApp(config);

  export default app;