import React, { useState, useEffect } from "react";
import { getCategories } from '../../data/AsyncMock';
import '../../stylesheets/NavBar/NavBar.css';
import NavBoton from './NavBoton';
import NavLogo from './NavLogo';
import CartWidget from '../CartWidget/CartWidget';
import Loader from "../Loader/Loader";

function NavBar(props){

    /*
    navBar
    presenta la barra de navegacion de categorias:
    Logo
    Lista de botones del menu: utilizando el state correspondiente
    cartWidget: le pasa la cantidad de productos que debe recibir del cart
    */

    const[listaBotones, setProductos] = useState([]);
    const[loadingCat, setLoadingCat] = useState(true);

    useEffect(()=>{
        setLoadingCat(true);
        getCategories()
            .then((cat)=>{setProductos(cat)})
            .catch((error) => console.log(error))
            .finally(()=>setLoadingCat(false)) 
    },[])

    return(
        <div id='navBar' className='NavBar'>
            <NavLogo/>
            <div id='navCategories' className='Categories'>
            {loadingCat ? <Loader ancho={30}/> :
                listaBotones.map((boton) =>
                <NavBoton
                    key={boton.id}
                    dirUrl={`/category/${boton.id}`}
                    etiqueta={boton.etiqueta}
                />
                )
                }
            </div> 
            <CartWidget>{props.cantProducts}</CartWidget>
        </div>
        )
}   

export default NavBar;