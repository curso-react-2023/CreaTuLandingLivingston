import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
<<<<<<< Updated upstream
=======
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound'

>>>>>>> Stashed changes

/*
Punto principal, presenta la navBar y el Item list container
*/

function App() {
    
  const[cartCantProducts, setCantProducts] = useState(2);

  return (
    <div id='App' className='App'>
      <NavBar
<<<<<<< Updated upstream
      cantProducts={cartCantProducts}/>
      <ItemListContainer>
          <h1>Bienvenido</h1>
          <p>Al mejor Shopping de ropa de niños del mundo, donde podra desde la comodidad de su casa seleccionar las mejores marcas, realizar la compra y recibir sus productos en pocos pasos</p>
      </ItemListContainer>
    </div>
=======
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
>>>>>>> Stashed changes
  )
}

export default App
