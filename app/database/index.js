import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC7jIxofVKX7NNEIWJTgj1HH8dwedgHIRY',
  authDomain: 'react-user-management.firebaseapp.com',
  databaseURL: 'https://react-user-management.firebaseio.com'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;