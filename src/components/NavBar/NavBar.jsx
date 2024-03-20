import React, { useState } from "react";
import '../../stylesheets/NavBar/NavBar.css';
import NavBoton from './NavBoton';
import NavLogo from './NavLogo';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props){
    
    /* 
    Lista de botones de categoris actual de la tienda, debe hacerse dinamica
    */
    const botones = [
        {
            id: 1,
            etiqueta: 'Remeras',
            seleccionado: false
        },
        {
            id: 2,
            etiqueta: 'Pantalones',
            seleccionado: false
        },
        {
            id: 3,
            etiqueta: 'Vestidos',
            seleccionado: false
        },
        {
            id: 4,
            etiqueta: 'Accesorios',
            seleccionado: false
        }
    ];

    /*
    funciones para manejar la lista de botones y el click de cada uno
    */
    const[listaBotones, setBotones] = useState(botones);
    
    const cambioCategoria = (categoryId,seleccionado) => {
        if (!seleccionado){
            const botonesActualizados = listaBotones.map(boton => {
                if (boton.id === categoryId){
                    boton.seleccionado = true;
                }else{
                    boton.seleccionado = false;
                }
                return boton;
            });

            setBotones(botonesActualizados);
        }
      }

    /*
    navBar
    presenta la barra de navegacion de categorias:
    Logo
    Lista de botones del menu: utilizando el state correspondiente
    cartWidget: le pasa la cantidad de productos que debe recibir del cart
    */  
    return(
        <div id='navBar' className='NavBar'>
            <NavLogo/>
            <div id='navCategories' className='Categories'>
                {
                listaBotones.map((boton) =>
                    <NavBoton
                        key={boton.id}
                        id={boton.id}
                        seleccionado={boton.seleccionado}
                        handleClick={cambioCategoria}
                    >{boton.etiqueta}</NavBoton>
                    )
                }
            </div> 
            <CartWidget>{props.cantProducts}</CartWidget>
        </div>
        )
}   

export default NavBar;