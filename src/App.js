import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import data from './users.json'
import 'font-awesome/css/font-awesome.css'


import Profile from './Profile'
import Contacts from './Contacts'

const App = props => (
  <Router>
    <div id="page">
      <Route exact path='/' component={Contacts} />
      <Route path="/profile/:id" component={Profile} />
    </div>
  </Router>

)


export default App;
