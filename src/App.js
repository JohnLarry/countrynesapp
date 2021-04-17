import logo from './logo.svg';
import './App.css';
import React from "react";  
import {NewsHeadline} from './components/newsheadline';
import NewsDetail from './components/newsdetails';
import { countryNewsStore } from './Store';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom' ;

function App() {
  return (<React.Fragment>
  <Router>
    <Route path ="/" exact>
    <NewsHeadline store ={countryNewsStore}/>
    </Route>
    <Route path ="/details/:articleId" >
    <NewsDetail store ={countryNewsStore} />
    </Route>
    </Router>
  </React.Fragment>);
}

export default App;
