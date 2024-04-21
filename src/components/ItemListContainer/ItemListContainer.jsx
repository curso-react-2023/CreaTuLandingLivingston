import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import '../../stylesheets/ItemListContainer/ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import Loader from "../Loader/Loader";
import { getProductosPorCategoria } from '../../data/AsyncMock';
/*
Contenedor de la lista de productos,  maneja estado de los productos
*/

function ItemListContainer(){

    /*
    funciones para manejar la lista de productos
    */
    const {idCategoria} = useParams();
    const[listaProductos, setProductos] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        getProductosPorCategoria(idCategoria)
            .then((cat)=>{setProductos(cat)})
            .catch((error) => console.log(error))
            .finally(()=>setLoading(false)) 
    },[idCategoria])

    return(
        <div id='itemListContainer' className='itemListContainer'>
            {loading ? <Loader ancho={70}/> :
            <ItemList
                listaProductos={listaProductos}/>
            }
        </div>
    );
}

export default ItemListContainer;