import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDjl7U13fbeubFrDH1ApY13k4MiwmF6W98',
    authDomain: 'fb9-reading-list-f8c44.firebaseapp.com',
    projectId: 'fb9-reading-list-f8c44',
    storageBucket: 'fb9-reading-list-f8c44.appspot.com',
    messagingSenderId: '266603101007',
    appId: '1:266603101007:web:713d517d02f684071ce33a'
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
export {
    db,
    auth
}