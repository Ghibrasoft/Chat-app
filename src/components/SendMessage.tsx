import React, { useState } from 'react';
import { dataBase, auth } from '../data/firebaseData';
import firebase from 'firebase/compat/app';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SendMessage = ({ scroll }: any) => {
  const [msg, setMsg] = useState('');

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();

    const { uid, photoURL }: any = auth.currentUser;

    await dataBase.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMsg('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Form onSubmit={sendMessage} className='sendMessage_form d-flex'>

      <Form.Group>
        <Form.Control
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className='send_input'
          placeholder='Message...'
        />
      </Form.Group>
      <Button type='submit' variant='primary' className='send_btn ms-1'>Send</Button>

    </Form>
  )
}

export default SendMessage