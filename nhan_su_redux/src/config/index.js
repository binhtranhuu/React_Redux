import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyCyKB9qWvCb_TnqGVV4MoJ6fai-QQ8vCyQ",
    authDomain: "staff-manage-api.firebaseapp.com",
    databaseURL: "https://staff-manage-api-default-rtdb.firebaseio.com",
    projectId: "staff-manage-api",
    storageBucket: "staff-manage-api.appspot.com",
    messagingSenderId: "909936241161",
    appId: "1:909936241161:web:1b8118c18b011b0bcea6d8",
    measurementId: "G-BJ7BSKN9BF"
};
// Initialize Firebase
firebase.initializeApp(config);

var dataStaff = firebase.database().ref('staff_info');

export default dataStaff;