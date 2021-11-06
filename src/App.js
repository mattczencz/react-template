import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import { Container } from './styles/Containers';

function App() {
  return (
    <>
      <Nav/>
      <Container fj="evenly">
        <p>Some Text</p>
        <p>Some Text</p>
      </Container>
    </>
  );
}

export default App;
