import React, { useState, useEffect, useRef } from 'react'
import { auth, dataBase } from '../data/firebaseData';
import SendMessage from './SendMessage';
import SignOut from './SignOut'
import { Card, Row, Col } from 'react-bootstrap';



const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]); // need a type 

  useEffect(() => {
    dataBase.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(docItem => docItem.data()));
    })
  }, []);

  const scroll = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className='signOut_div d-flex justify-content-center sticky-top'>
        <SignOut />
      </div>

      <div className='messages_div overflow-auto' style={{height: '85%'}}>
        {
          messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <Card key={id} style={{ width: '15rem', background: 'none' }} className={`message_div mb-3 ${uid === auth.currentUser?.uid ?
                'float-start bg-light'
                :
                'float-end bg-primary text-white'}`}>
                <Row className='g-0'>
                  <Col className='col-md-2'>
                    <Card.Img src={photoURL} alt='user_img' className='message_img p-1 img-fluid rounded-circle' />
                  </Col>
                  <Col className='col-md-10'>
                    <Card.Body>
                      <Card.Text className='message_p'>{text}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
          ))
        }
        <div ref={scroll}></div>
      </div>

      <div className='sendMessage_div sticky-bottom d-flex justify-content-end'>
        <SendMessage scroll={scroll} />
      </div>
    </>
  )
}

export default Chat