import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './data/firebaseData';

import Container from 'react-bootstrap/Container';


function App() {
  const [user] = useAuthState(auth as any);

  return (
    <section className='startPage_section'>
      {
        user ?
          <Container className='chat shadow rounded bg-success-subtle p-3 w-75 h-75 overflow-auto'><Chat /></Container>
          :
          <Container className='sign d-flex justify-content-center'><SignIn /></Container>
      }
    </section>
  );
}

export default App;
