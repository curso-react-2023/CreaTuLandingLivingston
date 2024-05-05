import '../../Stylesheets/PageNotFound/PageNotFound.css';

/* Pagina para error de ruta*/

function PageNotFound(){
    return(
        <div className='pageNotFoundContainer'>
            <div className='pageNotFound'>
                <img className='pageNotFoundWorker' src='/images/pageNotFoundWorker.png'/>
                <div className='pageNotFoundMessge' >OHHHH!! La pagina buscada no existe!! verifica si escribiste correctamente, si el error persiste comunicate con el administrador del sitio.</div>
            </div>
        </div>
    )
}

export default PageNotFound;