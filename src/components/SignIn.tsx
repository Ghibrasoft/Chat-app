import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from '../data/firebaseData';
import { FcGoogle } from 'react-icons/fc';

import Button from 'react-bootstrap/esm/Button';


const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        // <div className='signin_div'>
            <Button 
            onClick={signInWithGoogle}
            variant='outline-primary' 
            className='signIn_btn'>
                <p>
                    <span><FcGoogle /></span>
                    Sign in with Google Account
                </p>
            </Button>
        // </div>
    )
}

export default SignIn