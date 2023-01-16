import React from 'react';
import { auth } from '../data/firebaseData';
// import { signOut } from 'firebase/auth';

import Button from 'react-bootstrap/Button';

const SignOut = () => {
  return (
    <Button
      onClick={() => auth.signOut()}
      variant='outline-primary'
      className='signOut_btn w-25'>Sign out</Button>
  )
}

export default SignOut