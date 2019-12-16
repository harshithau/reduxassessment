import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mainuser from './Component/Mainuser';

function App() {
  return (
    <div className="App">
      <div className="body">
        <Router>
          <switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/Register' component={Register}></Route>
            <Route exact path='/Mainuser' component={Mainuser}></Route>
    
           
          </switch>
        </Router>
      
      </div>
    </div>
  );
}

export default App;


