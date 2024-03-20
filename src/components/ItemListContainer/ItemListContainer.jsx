import '../../stylesheets/ItemListContainer/ItemListContainer.css'

/*
Contenedor de la lista de productos, 
props:
cartel de bienvenida
*/

function ItemListContainer(props){
    return(
        <div id='itemListContainer' className='itemListContainer'><div className='bienvenida'>{props.children}</div></div>
    );
}

export default ItemListContainer;