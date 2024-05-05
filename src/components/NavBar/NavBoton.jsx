import React from "react";
import '../../Stylesheets/NavBar/NavBoton.css'
import { NavLink } from "react-router-dom";

/*
boton del navBar de categorias
*/

function NavBoton({dirUrl, etiqueta}){
    return(
      <NavLink  to={dirUrl} className='navButton'><div className='navButtonText'>{etiqueta}</div></NavLink>
    )
  }
  
  export default NavBoton;
