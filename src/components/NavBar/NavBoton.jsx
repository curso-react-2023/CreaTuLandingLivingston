import React from "react";
import '../../stylesheets/NavBar/NavBoton.css'

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
