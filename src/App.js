import './App.css';

import React, { Component } from 'react'

import NavBar from './components/NavBar';
import News from './components/News';
// import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


// const toggleMode = () =>{
//   if(mode === "light"){
//     setMode("dark")
//   }
//   else{
//     setMode("light")
//   }
// }

export default class App extends Component {
  
  // constructor(){
  //   this.state = {

  //   }
  // }
  
  
  
  render() {
    // const [mode, setMode] = useState("light")
    return (
      <>
      <BrowserRouter>
      <NavBar />
      <Routes>
       <Route key="home"  exact path='/' element={<News country="us" category="general" />}></Route>
       <Route key="business" exact path='/business'  element={<News country="us" category="business" />}></Route>
       <Route key="entertainment"  exact path='/entertainment' element={<News country="us" category="entertainment" />}></Route>
       <Route key="health"  exact path='/health' element={<News country="us" category="health" />}></Route>
       <Route key="science"  exact path='/science' element={<News country="us" category="science" />}></Route>
       <Route key="sports"  exact path='/sports' element={<News country="us" category="sports" />}></Route>
       <Route key="technology"  exact path='/technology' element={<News country="us" category="technology" />}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}

