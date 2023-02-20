//import listado from "../listado.json";
import iconoAtras from "../assets/img/atomoBack.png";
import styles from "./HeaderProducto.module.css";
import { Link } from "react-router-dom";


export function HeaderProducto({product}){
    //console.log(product); 
   
    return(
        <div className={styles.contenedor}>
            <div className={styles.ubicacionProducto}>
                
                <p>{product.category.categoryTitle}</p>
                <h2>{product.productTitle}</h2>
                
            </div>
            <Link to='/' >
            <div className={styles.flechaAtras}>
                <img src={iconoAtras} alt="volver atrás" />
            </div> 
            </Link>
        </div>


    );
    
     // ***SI TENGO QUE SETEAR LA UBICACION ***
    // return(
    //     <div className={styles.contenedor}>
    //         <div className={styles.ubicacionProducto}>
    //             <p>DEPARTAMENTOS</p>
    //             <h2>El Rosedal 1</h2>
    //         </div>
    //         <Link to='/' >
    //         <div className={styles.flechaAtras}>
    //             <img src={iconoAtras} alt="volver atrás" />
    //         </div> 
    //         </Link>
    //     </div>
    // );
}
