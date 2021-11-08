import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import { Container } from './styles/Containers';
import Home from './pages/Home';
import About from './pages/About';
import Overview from './pages/Overview';

function App() {
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/overview">
          <Overview/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
