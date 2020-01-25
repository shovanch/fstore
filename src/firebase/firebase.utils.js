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

// To upload the shopData object to Firebase
export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // Get ref to collection with matching key
  const collectionRef = firestore.collection(collectionKey);

  // Batching the set call, so that we can do multiel writes at oncc
  const batch = firestore.batch();

  // Loop over the objects and setting each obj as indv. doc
  objectsToAdd.forEach(obj => {
    // Get a ref for doc under collection
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

// Get the collections from firebase and transform it into a giant object
export const convertCollectionSnapshotToObj = collections => {
  const transformedCollectionObj = collections.docs.map(doc => {
    // Extract title and itemsArray from document
    const { title, items } = doc.data();

    // Modify the collection doc by adding route & id
    return {
      // converts the title to URl string
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollectionObj.reduce((accumulator, collection) => {
    // Create giant object with key of doc title for each collection
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// firebase methods
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// For Google auth signin method
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
