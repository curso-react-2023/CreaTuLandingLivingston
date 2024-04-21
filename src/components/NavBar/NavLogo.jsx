import { Link } from "react-router-dom";
import '../../stylesheets/NavBar/NavLogo.css';
import Logo from '../../assets/images/logo.png';

/*
Logo de la empresa en la barra de navegacion si se hace click va a la home
*/

function NavLogo (){
    return(
        <Link  className='Logo' to={'/'}><img src={Logo} className='Logo' alt='Funny Colours'/></Link>);
}

export default NavLogo;