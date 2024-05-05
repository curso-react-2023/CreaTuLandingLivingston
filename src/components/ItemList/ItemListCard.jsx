import React from "react";
import '../../Stylesheets/ItemList/ItemListCard.css';
import { Link } from "react-router-dom";

function ItemListCard({id, nombre, isbn, editorial, autor, stock, precio, foto}) {
  return (
    <div className='itemListCard'>
      <ul className='listCardFeatures'>
        <li className='listCardFoto'><img src={`/productImages/${foto}.jpg`} className='itemListFoto'/></li>
        <li className='listCardTitle'>{ nombre }</li>
        <li className='listCardData'><b>Isbn:</b> { isbn }</li>
        <li className='listCardData'><b>Editorial:</b> { editorial }</li>
        <li className='listCardData'><b>Autor:</b> { autor }</li>
        <li className='listCardData'><b>Precio de lista:</b> ${ precio }</li>
        <li className='listCardGoDetail'>
        {
          stock > 0 ? 
          <Link className='listCardAmpliarLink' to={`/product/${id}`}><button  className='listCardAmpliar'>Ver detalle</button></Link>
          :
          <div className='noStock'>Stock agotado.</div>
        }
        </li>
      </ul>
      
    </div>
  );
}

export default ItemListCard;