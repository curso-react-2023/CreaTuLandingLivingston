import React from "react";
import ItemCount from "./ItemCount";
import '../../stylesheets/ItemDetail/ItemDetail.css';

function ItemDetail({nombre, isbn, editorial, autor, stock, precio, foto, descripcion, idioma, publicacion, tematica}) {

  const onAdd = (cantidad) => {
    console.log(`cantidad agregada: ${cantidad}`)
  }

  return (
    <div className='itemDetail'>
      <h3>{ nombre }</h3>
      <div className='itemDetailData'>
        <img src={`/productImages/${foto}.jpg`} className='itemDetailFoto'/>
        <div>
        <div className='itemDetailDescripcion'>{descripcion}</div>    
        <div className='itemDetailFeatures'>
            <p className='itemDetailData'>Editorial: { editorial }</p>
            <p className='itemDetailData'>Autor: { autor }</p>
            <p className='itemDetailData'>Idioma: { idioma }</p>
            <p className='itemDetailData'>Fecha Publicacion: { publicacion }</p>
            <p className='itemDetailData'>Tematica: { tematica }</p>
            <p className='itemDetailData'>Precio de lista: ${ precio }</p>
        </div>
        <div className='itemFeatureCart'><ItemCount stock={10} valorInicial={1} onAdd={onAdd}/></div>
        
        </div>
      </div>
      
    </div>
  );
}

export default ItemDetail;