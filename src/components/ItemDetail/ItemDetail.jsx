import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import '../../Stylesheets/ItemDetail/ItemDetail.css';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({id, nombre, isbn, editorial, autor, stock, precio, foto, descripcion, idioma, publicacion, tematica}) => {

  const { addItem, alreadyOnCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    const newItem={
        id,
        nombre,
        isbn,
        cantidad,
        precio,
        stock
    }
    addItem(newItem);
  }
  return (
    <div className='itemDetail'>
      <div className='nombreProducto'>{ nombre }</div>
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
          <div className='itemFeatureCart'>
            {
            alreadyOnCart(id) ?
            <div>Item ya agregado, <Link to='/cart' ><button className='verCarrito'>ver carrito</button></Link></div>
            :
              stock > 0 ? 
              <ItemCount stock={10} valorInicial={1} onAdd={onAdd}/>
              :
              <div className='noStock'>Stock agotado.</div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;