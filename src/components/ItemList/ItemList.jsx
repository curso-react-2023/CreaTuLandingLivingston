import '../../stylesheets/ItemList/ItemList.css';
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
            listaProductos.map((producto) =>
                < ItemListCard
                    key={producto.id}
                    {...producto}
                    />
                )
            }
        </div> 
        )
}   

export default ItemList;