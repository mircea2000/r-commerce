import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9zqzl3qUfsrs7pnTkzL2CiEr3tSb2OPw",
    authDomain: "r-commerce-f4306.firebaseapp.com",
    databaseURL: "https://r-commerce-f4306.firebaseio.com",
    projectId: "r-commerce-f4306",
    storageBucket: "r-commerce-f4306.appspot.com",
    messagingSenderId: "928938133387",
    appId: "1:928938133387:web:814f7e058e961fa940d18e",
    // measurementId: "G-343SFDYWL8"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();

  console.log({collection: collectionSnapshot.docs.map(doc => doc.data())})

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

  return userRef;
}

// adding data to firebase
export const addCollectionAndDocuments = async (
    collectionKey, 
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey)
    
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        // const newDocRef = collectionRef.doc(obj.title)
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
}
// displaying data from firestore
export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(docSnapshot => {
        const {title, items, backgroundUrl} = docSnapshot.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            backgroundUrl,
            items
        }
    })
    // console.log(transformedCollection)
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;