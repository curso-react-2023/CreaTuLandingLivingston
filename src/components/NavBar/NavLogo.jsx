import '../../stylesheets/NavBar/NavLogo.css';
import Logo from '../../assets/images/Kids_Clothes.png';

/*
Logo de la empresa en la barra de navegacion
*/

function NavLogo (){
    return(<img src={Logo} className='Logo' alt='Funny Colours'/>);
}

export default NavLogo;