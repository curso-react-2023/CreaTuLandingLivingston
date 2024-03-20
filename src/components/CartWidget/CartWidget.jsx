import { BsCart4 } from "react-icons/bs";
import '../../stylesheets/CartWidget/CartWidget.css'

/*
Cart Widget logo + cantidad de productos 
Props:
children: numerico, cantidad de productos añadidos al cart de compras*/

function CartWidget(props){
    return(
    <div className='cartWidget'>
        <BsCart4 className='cartLogo'/>
        <div id='itemsComprados' className='cartItems'>{props.children}</div>
    </div>
    );
}

export default CartWidget;