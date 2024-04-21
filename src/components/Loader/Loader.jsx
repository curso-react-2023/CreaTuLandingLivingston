import { PacmanLoader } from "react-spinners";

function Loader({ancho}){
    return (
        <PacmanLoader color="#36d7b7" size={ancho}/>
    )
}

export default Loader;