import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import '../../Stylesheets/ItemDetailContainer/ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Config/FireBase';
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
        const getProduct = async () =>{
            const queryRef = doc(db,'productos', idProducto);
            const response = await getDoc(queryRef);
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProducto(newItem); 
            setLoadingProducto(false);
        }
        getProduct(); 
         
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