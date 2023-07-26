import React from 'react';
import Quote from './quote';
import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom"
import Wordquote from './wordquote';
import Idquote from './idquote';
import Products from './products/products';
import Profile from './profile/profile';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Quote/>}></Route>
      <Route path='/id' element={<Idquote/>}></Route>
      <Route path='/word' element={<Wordquote/>}></Route>
      <Route path='/pro' element={<Products/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
