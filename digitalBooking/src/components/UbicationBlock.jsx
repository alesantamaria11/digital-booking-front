//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./UbicationBlock.module.css"
//import {faLocationDot} from '@fortawesome/free-solid-svg-icons'



export function UbicationBlock({product}){
  
    return(
        <div className={styles.contenedorUbication}>
            <div className={styles.ubicacionDetallada}>
                <div className="fa">&#xf3c5;</div>
                <div>
                    
                    <p> {`${product.city.city}, ${product.city.country.country}`}</p> 
                    <p className={styles.proximityLocation}> A 950m del centro</p>
                </div>
            </div>
            <div className={styles.contenedorPuntajeYnumero}>
                <div className={styles.contenedorPuntaje}>
                <div className={styles.starScore}>
                <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                </div>
                <p className={styles.textoStatus}>Muy bueno</p>
                </div>
                
                <div className={styles.figurNumber}>
                    <p className={styles.numeroScore}>8</p>
                </div>
                
            </div>
        </div>
    );
}