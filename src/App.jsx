import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound'


/*
Punto principal, presenta la navBar y el Item list container
*/

function App() {
    
  const[cartCantProducts, setCantProducts] = useState(2);

  return (
    <div id='App' className='App'>
      <BrowserRouter>
      <NavBar
      cantProducts={cartCantProducts}
      />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/product/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
