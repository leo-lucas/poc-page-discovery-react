import logo from './logo.svg';
import './App.css';
import routes from './routes';
import  {  Suspense } from 'react';
import { BrowserRouter as Router,Switch, Link, Route } from 'react-router-dom';



function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 3 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>
            <Link to="/teste">teste</Link>
          </li>
          <li>
            <Link to="/teste1">teste1</Link>
          </li>
          <li>
            <Link to="/teste2">teste2</Link>
          </li>
          <li>
            <Link to="/teste3">teste3</Link>
          </li>
          <li>
            <Link to="/teste4">teste4</Link>
          </li>
         
        </ul>


          <Switch>
            <Suspense fallback={<h1>Carregando...</h1>}>

        
  
              {routes.map((Comp, index) => <Route path={`/teste${index}`} key={`route-${index}`} ><Comp /></Route>)}
            </Suspense>

          </Switch>




        


      </header>
    </div>
    </Router>

  );
}

export default App;
