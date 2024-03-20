import React from "react";
import '../../stylesheets/MiniDesafios/Boton.css'

function Boton(props){
    return(
      <button
      id={props.id} 
      className={ props.className }
      disabled={props.deshabilitado}
      onClick={() => props.handleClick(props.id)}
      >
        {props.children}
      </button>
    )
  }
  
  export default Boton;
