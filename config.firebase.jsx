// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQFU1ZXEN0HstOiYxXb2Hir4JuGBnXghI",
  authDomain: "scic-task-80102.firebaseapp.com",
  projectId: "scic-task-80102",
  storageBucket: "scic-task-80102.appspot.com",
  messagingSenderId: "31280231134",
  appId: "1:31280231134:web:47671b2424dcdefd6c484f",
  measurementId: "G-C5JEM8LVZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;