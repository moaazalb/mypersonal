import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home,Contact,About} from './pages/index'
import './App.css';
import { Fragment } from 'react'; 
import ScrollButton from './components/ScrollButton/ScrollButton'; 
 import { Content } from './components/ScrollButton/Styles';
  

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>        
      <Route path='/c' element={<Contact/>}/>   
      <Route path='/a' element={<About/>}/>                 
    </Routes>
     </Router>
     <Fragment> 
      <Content/>
      <ScrollButton /> 
    </Fragment> 
     
    </>
  )
}

export default App;
