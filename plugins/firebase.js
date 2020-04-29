import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCjXChWnS8CfX3Ugl9Craol5h5uBw1AL3M',
  authDomain: 'vueproject-1dad0.firebaseapp.com',
  databaseURL: 'https://vueproject-1dad0.firebaseio.com',
  projectId: 'vueproject-1dad0',
  storageBucket: 'vueproject-1dad0.appspot.com',
  messagingSenderId: '485819303044',
  appId: '1:485819303044:web:8eb2c40ee216b27a1eaed1',
  measurementId: 'G-4HC90FJ6DQ'
}

// eslint-disable-next-line no-unused-vars
let auth = null
// Initialize Firebase
if (!firebase.apps.length) {
  auth = firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
}

export default firebase
