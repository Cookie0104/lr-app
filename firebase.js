//import * as firebase from "firebase/app";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, writeBatch } from "firebase/firestore";
//import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDARuECsn3mTWtejkhxuZl2S5R5quQBm9w",
  authDomain: "lr-database-e7681.firebaseapp.com",
  projectId: "lr-database-e7681",
  storageBucket: "lr-database-e7681.appspot.com",
  messagingSenderId: "863520204724",
  appId: "1:863520204724:web:fbdfe212101920d93b74e1",
};

const app = initializeApp(firebaseConfig);

export default app;

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  console.log(objectsToAdd.title);
  const batch = writeBatch(db);
  const docRef = doc(collectionRef, objectsToAdd.title);
  batch.set(docRef, objectsToAdd);

  await batch.commit();
  console.log("done");
};
