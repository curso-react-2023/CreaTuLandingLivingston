import React from "react";
import '../../stylesheets/NavBar/NavBoton.css'

/*
boton del navBar de categorias
Parametros esperados:
id: id de la categoria de productos que corresponde
seleccionado: indica si el boton corresponde a la categoria que se muestra actualmente en el itemListContainer
children: texto indicando el nombre de la categoria
handleClick: funcion a ejecutar cuando se clickea un boton
*/

function NavBoton(props){
    return(
      <button
      id={props.id} 
      className={ props.seleccionado ? 'navButton selected':'navButton click '}
      onClick= {() => props.handleClick(props.id,props.seleccionado)}
      >
        {props.children}
      </button>
    )
  }
  
  export default NavBoton;
