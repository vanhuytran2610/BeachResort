import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destinations';
import Error from './pages/Error';
import SingleDestination from './pages/SingleDestination';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/destinations" component={Destination}></Route>
        <Route exact path="/destinations/:slug" component={SingleDestination}></Route>
        
        <Route component={Error}></Route>
      </Switch>
      
    </>
    
  );  
}

export default App;
