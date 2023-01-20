import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';






const dataBase = firebase.firestore();
const auth = firebase.auth();
export { dataBase, auth };
