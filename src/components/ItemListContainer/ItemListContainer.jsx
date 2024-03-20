import '../../stylesheets/ItemListContainer/ItemListContainer.css'

function ItemListContainer(props){
    return(
        <div id='itemListContainer' className='itemListContainer'><div className='bienvenida'>{props.children}</div></div>
    );
}

export default ItemListContainer;