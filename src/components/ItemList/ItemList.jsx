import '../../Stylesheets/ItemList/ItemList.css';
import ItemListCard from './ItemListCard';
import Loader from "../Loader/Loader";


function ItemList({listaProductos}){
    /*
    ItemList
    presenta la lista de productos que recibe:
    */  
    return(
        <div id='itemList' className='itemList'>
            {
            listaProductos.length>0?    
            listaProductos.map((producto) =>
                < ItemListCard
                    key={producto.id}
                    {...producto}
                    />
                )
                :'No se encontraron productos para esta categoria.'
            }
        </div> 
        )
}   

export default ItemList;