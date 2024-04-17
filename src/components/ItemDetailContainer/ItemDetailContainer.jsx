import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { getProductoPorId } from '../../data/AsyncMock';
import '../../stylesheets/ItemDetailContainer/ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'

/*
Contenedor de la lista de productos, 
props:
cartel de bienvenida
*/

function ItemListContainer(){

    /*
    funciones para manejar la lista de productos
    */

    const {idProducto} = useParams();
 
    const[producto, setProducto] = useState([]);
    const[loadingProducto, setLoadingProducto] = useState(true);


    useEffect(()=>{
        setLoadingProducto(true);
        getProductoPorId(idProducto)
            .then((prod)=>{
                setProducto(prod) 
            })
            .catch((error) => console.log(error))
            .finally(()=>setLoadingProducto(false)) 
    },[idProducto])


    return(
        <div id='itemDetailContainer' className='itemDetailContainer'>
            {
                loadingProducto ? <Loader ancho={70}/>
                : <ItemDetail {...producto}/>
            }    
        </div>
    );
}

export default ItemListContainer;