import React from 'react'
import styles from './FeatureBlock.module.css';
import iconSink from '../assets/img/iconSink.png';
import iconTv from '../assets/img/iconTv.png';
import iconSnowflake from '../assets/img/iconSnowflake.png';
import iconPaw from '../assets/img/iconPaw.png';
import iconCar from '../assets/img/iconCar.png';
import iconPool from '../assets/img/iconPool.png';
import iconWifi from '../assets/img/iconWifi.png';


export const BloqueCaracteristicas = ({product}) => {

  console.log("este es el producto", product.characteristics);
//consumir endpoint de lista product-categorias por id 
//de producto (ya esta recibiendo el producto por props), 


//console.log("esta es la variable", caracteristicas);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        ¿Que ofrece este lugar?
      </h3>
      
      <hr className={styles.line}/>

      
        <div className={styles.content}>
          
        {product.characteristics.map((prod) =>{ 
          console.log("este es el map",product);
          return(
          <>
            <img src={prod?.characteristicImage} alt={prod?.characteristicName}/>
            <label className="">{prod?.characteristicName}</label>
          </>
          )
 
         }
          )} 
        
        </div>
   
        
     
    </div>
    
  )
};