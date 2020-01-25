import {
  firestore,
  convertCollectionSnapshotToObj
} from "firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsObj => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsObj
});

export const fetchCollectionsFailture = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// ASYNC action function through redux-thunk
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    // Convert the incoming snapshot object into a giant object and pass it to set as state
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsObj = convertCollectionSnapshotToObj(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsObj));
      })
      .catch(error => dispatch(fetchCollectionsFailture(error.message)));
  };
};
