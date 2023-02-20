import { useEffect, useState } from 'react';
import lista1 from '../listado3.json';
import styles from "./GaleriaMobile.module.css";

export function GaleriaMobile({imagenes}){
    

    const [imgActual, setImgActual]= useState(0);
    const cantidad=lista1?.length;

    if(!Array.isArray(lista1) || cantidad ===0)
    return;

    const nextImg= ()=>{
        setImgActual(imgActual===cantidad -1 ? 
           0 : imgActual +1);
    };

    const prevImg= ()=>{
        setImgActual(imgActual=== 0 ? 
           cantidad - 1 : imgActual -1);
    };
    
    // useEffect(()=>{
    //     setInterval(()=>{
    //         nextImg();
    //     },5000);
    // }, []);

      return (
        
   <div className={styles.locationGaleriaMobile}> 
          
          <button  onClick={prevImg}><div className='fa'>&#xf060;</div></button> 
          {imagenes.map((listaPrueba,index)=> {
              return(
                  <div className={imgActual===index ? `${styles.slideM} ${styles.active}` : styles.slideM}> {imgActual ===index && (
                      <img src={listaPrueba.image} alt={listaPrueba.id} key={listaPrueba.id} width={638} height={323}/>
                  )}
                  
                  </div>
              )  
          } 

          )
          } 
          <button onClick={nextImg}><div className='fa'>&#xf061;</div></button>    
          
         
    </div>



      );
}


