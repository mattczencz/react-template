import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import data from './data'

function App() {
  return (
    <main>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/stocks/:symbol" render={props => <Stock data={data} {...props}/>}/>
        <Route path="/stocks">
          <Dashboard data={data}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
