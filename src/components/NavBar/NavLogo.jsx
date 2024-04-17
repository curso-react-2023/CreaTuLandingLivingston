<<<<<<< Updated upstream
=======
import { Link } from "react-router-dom";
>>>>>>> Stashed changes
import '../../stylesheets/NavBar/NavLogo.css';
import Logo from '../../assets/images/Kids_Clothes.png';

/*
Logo de la empresa en la barra de navegacion si se hace click va a la home
*/

function NavLogo (){
<<<<<<< Updated upstream
    return(<img src={Logo} className='Logo' alt='Funny Colours'/>);
=======
    return(
        <Link  className='Logo' to={'/'}><img src={Logo} className='Logo' alt='Funny Colours'/></Link>);
>>>>>>> Stashed changes
}

export default NavLogo;