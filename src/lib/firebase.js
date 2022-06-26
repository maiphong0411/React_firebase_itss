import firebase from 'firebase';

// firebase の初期化
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyA2fxQjtvtsWhNsipMmXrt0NgGsP4JyRv8",
  authDomain: "maiphong-todoapp.firebaseapp.com",
  databaseURL: "https://maiphong-todoapp-default-rtdb.firebaseio.com",
  projectId: "maiphong-todoapp",
  storageBucket: "maiphong-todoapp.appspot.com",
  messagingSenderId: "593679324297",
  appId: "1:593679324297:web:79175137cda2a8eafd6258",
  measurementId: "G-C6TF2JVK8J"
  };
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};

