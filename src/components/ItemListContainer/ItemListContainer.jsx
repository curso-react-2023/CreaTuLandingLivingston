import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import '../../Stylesheets/ItemListContainer/ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Config/FireBase';

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
        const getData = async () =>{
            const coleccion = collection(db,'productos');
            const queryRef = !idCategoria ?
                                query(coleccion,where('destacado','==',0))
                                :
                                query(coleccion,where('categoria','==',idCategoria))

            const response = await getDocs(queryRef);

            const productos = response.docs.map((prod)=>{
                const newProd={
                    ...prod.data(),
                    id:prod.id
                }
                return newProd;
            })
            setProductos(productos);
            setLoading(false);
        }

        getData(); 
    },[idCategoria])

    return(
        <div id='itemListContainer' className='itemListContainer'>
            {loading ? <div className='loaderContainer'><Loader ancho={70}/></div> :
            <ItemList
                listaProductos={listaProductos}/>
            }
        </div>
    );
}

export default ItemListContainer;