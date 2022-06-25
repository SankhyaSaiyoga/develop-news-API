import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
   BrowserRouter as Router,
   Switch,
   Route
  } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Router exact path="/">
           <App />
        </Router>
        
        <Router exact path="/about">
           <div>This is About page</div>
        </Router>
        
        
      </Switch>
      
    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);
