import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB9zqzl3qUfsrs7pnTkzL2CiEr3tSb2OPw",
    authDomain: "r-commerce-f4306.firebaseapp.com",
    databaseURL: "https://r-commerce-f4306.firebaseio.com",
    projectId: "r-commerce-f4306",
    storageBucket: "r-commerce-f4306.appspot.com",
    messagingSenderId: "928938133387",
    appId: "1:928938133387:web:814f7e058e961fa940d18e",
    measurementId: "G-343SFDYWL8"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exist) {
        const {displayName, photoURL, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;