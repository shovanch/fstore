import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_tGAZVTxzPnj74FAoQDc3YGo7ARoXFVk",
  authDomain: "fstore-83474.firebaseapp.com",
  databaseURL: "https://fstore-83474.firebaseio.com",
  projectId: "fstore-83474",
  storageBucket: "fstore-83474.appspot.com",
  messagingSenderId: "595858142802",
  appId: "1:595858142802:web:8e8bf590b15b502b31118b"
};

// Create new user profile in firebase, taking user object-data as params
export const createUserProfileDocument = async (
  userAuthObj,
  additionalData
) => {
  // Check if user already exists with same Id,
  // userRef will always return a value, we check if any data lives there
  const userRef = firestore.doc(`users/${userAuthObj.uid}`);
  const snapShot = await userRef.get();

  // If user doesn't exist, create user
  if (!snapShot.exists) {
    const { email } = userAuthObj;
    const createdAt = new Date();

    // Set the user-data in empty userRef
    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

// firebase methods
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// For Google auth signin method
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signinWithGoogle = () => auth.signinWithGoogle(provider);

export default firebase;
