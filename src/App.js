import React from "react";
import './App.css'
import {Footer, Blog, Possibility, Feature, WhatGTP3, Header} from './containers';
import {CTA, Brand, Navbar} from  './components';


function App() {
  return (
    <div className="App">
       <div className="gradient__bg">
           <Navbar/>
           <Header/>
       </div>
       <div>
           <Brand/>
           <WhatGTP3/>
           <Feature/>
           <Possibility/>
           <CTA/>
           <Blog/>
           <Footer/>
       </div>
    </div>
  );
}

export default App;
