import React,{useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BlogsPage, Blog } from './components/blogs/Blogs';
import About from './components/about/About';
import Home from './components/home/Home';

import AppContext,{DefaultConfiguration} from './AppContext';

function App() {
  // const headers=new Headers();
  // headers.append('pragma','no-cache');
  // headers.append('cache-control','no-cache')
  
  let [configuration,setConfiguration]=useState(DefaultConfiguration);

  useEffect(function(){
    fetch(`${process.env.PUBLIC_URL}/js/configuration.json`).then(r=>r.json()).then(c=>{setConfiguration(c);});
  },[])

  return (
    <AppContext.Provider value={configuration}>
      <Router>
        <Header />
        <Switch>
          <Route path='/about-me'>
            <About />
          </Route>
          <Route path='/blogs/:blogid'>
            <Blog />
          </Route>
          <Route path='/blogs'>
            <BlogsPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
