import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound'
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { ChakraProvider } from "@chakra-ui/react";
import CheckOut from "./components/CheckOut/CheckOut";

/*
Punto principal, presenta la navBar y el Item list container
*/

function App() {
 
  return (
    <div id='App' className='App'>
      <ChakraProvider>
      <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
              <Route path='/product/:idProducto' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/checkOut' element={<CheckOut/>} />
              <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    </CartProvider>
    <Footer/>
    </ChakraProvider>
    </div>
  )
}

export default App
