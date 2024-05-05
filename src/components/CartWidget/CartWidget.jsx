import { BsCart4 } from "react-icons/bs";
import '../../Stylesheets/CartWidget/CartWidget.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

/*
Cart Widget logo + cantidad de productos 
Props:
children: numerico, cantidad de productos añadidos al cart de compras*/

function CartWidget(){

    const { countItems } = useContext(CartContext);
    const total = countItems();

    return(
    <div className='cartWidget'>
        {
            total>0?
            <Link to='/cart' className='cartLink'><BsCart4 className='cartLogo'/></Link>
            :<div className='cartNoLink'><BsCart4 className='cartLogo'/></div>
        }
        <div id='itemsComprados' className='cartItems'>{ total }</div>
    </div>
    );
}

export default CartWidget;