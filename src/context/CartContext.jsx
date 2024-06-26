import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [Cart, setCart] = useState([]);

    const addItem = (nuevoProducto)=>{
        alreadyOnCart(nuevoProducto.id) ? 
            console.log('producto ya en carrito')
            :setCart([...Cart,nuevoProducto]);
    }

    const changeQuantity = (id,accion,stock) => {
        const productosActualizado = Cart.map((prod) => {
            if(prod.id===id){
                if (accion === 'add' && prod.cantidad < stock ){
                    return {...prod,cantidad: prod.cantidad+1};
                }
                
                if (accion === 'sub' && prod.cantidad > 1 ){
                    return {...prod,cantidad: prod.cantidad-1};
                }
            }
            return prod;
        })
        
        setCart(productosActualizado);
        
    }
    
    const removeItem = (id) => {
        const productosFiltrado=Cart.filter((producto)=>producto.id!=id);
        setCart(productosFiltrado);
    }

    const removeAllItems = () => {
        setCart([]);
    }

    const countItems = () => {
        const cantProductos=Cart.reduce((cantProd,item)=>cantProd+parseInt(item.cantidad),0);
        return cantProductos
    }

    const totalAmount = () => {
        const cantProductos=Cart.reduce((cantProd,item)=>cantProd+parseInt(item.cantidad*item.precio),0);
        return cantProductos
    }

    const alreadyOnCart = (id) =>{
        return Cart.some((producto)=>producto.id===id);
    }

    return(
        <CartContext.Provider value={{ Cart, addItem, removeItem, removeAllItems, countItems, alreadyOnCart, totalAmount, changeQuantity }}>
            { children }
        </CartContext.Provider>
    )
}