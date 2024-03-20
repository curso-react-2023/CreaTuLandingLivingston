import React, { useState } from "react";
import '../../stylesheets/NavBar/NavBar.css';
import NavBoton from './NavBoton';
import NavLogo from './NavLogo';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props){
    
    const botones = [
        {
            id: 1,
            etiqueta: 'Remeras',
            className: 'navButton',
            seleccionado: true
        },
        {
            id: 2,
            etiqueta: 'Pantalones',
            className: 'navButton',
            seleccionado: false
        },
        {
            id: 3,
            etiqueta: 'Vestidos',
            className: 'navButton',
            seleccionado: false
        },
        {
            id: 4,
            etiqueta: 'Accesorios',
            className: 'navButton',
            seleccionado: false
        }
    ];

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
            <CartWidget>5</CartWidget>
        </div>
        )
}   

export default NavBar;