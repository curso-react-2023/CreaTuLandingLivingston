import React, { useState, useEffect } from "react";
import '../../Stylesheets/NavBar/NavBar.css';
import NavBoton from './NavBoton';
import NavLogo from './NavLogo';
import CartWidget from '../CartWidget/CartWidget';
import Loader from "../Loader/Loader";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { db } from "../../Config/FireBase";
import { collection, getDocs } from "firebase/firestore";

function NavBar(){

    /*
    navBar
    presenta la barra de navegacion de categorias:
    Logo
    Lista de botones del menu: utilizando el state correspondiente
    cartWidget: le pasa la cantidad de productos que debe recibir del cart
    */

    const[listaBotones, setlistaBotones] = useState([]);
    const[loadingCat, setLoadingCat] = useState(true);

    useEffect(()=>{
        setLoadingCat(true);
        const getData = async () =>{
            const coleccion = collection(db,'categorias');
            const response = await getDocs(coleccion);

            const categorias = response.docs.map((cat)=>{
                const newCat={
                    ...cat.data(),
                    id:cat.id
                }
                return newCat;
            })
            setlistaBotones(categorias);
            setLoadingCat(false);
        }

        getData();
    },[])

    return(
        <>
        <div className='navContainer'>
            <NavLogo/>
            <div id='navBar' className='NavBar'>
                <div id='navCategories' className='Categories'>
                {loadingCat ? <Loader ancho={30}/> :
                    listaBotones.map((boton) =>
                    <NavBoton
                        key={boton.id}
                        dirUrl={`/category/${boton.id}`}
                        etiqueta={boton.etiqueta}
                    />
                    )
                    }
                </div>                
                <BreadCrumb/>    
            </div>
            <CartWidget/>
        </div>
        
        </>
        )
}   

export default NavBar;