import React from "react";
import '../../stylesheets/NavBar/NavBoton.css'

/*
boton del navBar de categorias
*/

<<<<<<< Updated upstream
function NavBoton(props){
=======
function NavBoton({dirUrl, etiqueta}){
>>>>>>> Stashed changes
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
