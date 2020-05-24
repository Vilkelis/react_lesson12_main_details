import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';


function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Router>
          <Switch>            
            <Route exact path="/" component={ServiceList} />
            <Route exact path="/:id/details" component={ServiceForm} />
          </Switch>      
        </Router>
      </div>
    </div>
  );
}

export default App;
