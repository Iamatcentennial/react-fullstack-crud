import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import LandingReactTable from './components/layout/LandingReactTable';
import AddEmployee from './components/employee/AddEmployee';
import DeleteEmployee from './components/employee/DeleteEmployee';
import UpdateEmployee from './components/employee/UpdateEmployee';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/emptable' component={LandingReactTable} />
          <div className="container">
            <Route exact path='/addemployee' component={AddEmployee} />
            <Route exact path='/deleteemployee' component={DeleteEmployee} />
            <Route exact path='/updateemployee' component={UpdateEmployee} />
          </div>
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
