//import listado2 from "../listado2.json";
import { GaleriaFotos } from "./GaleriaFotos";
import styles from "./GaleriaGrilla.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




export function GaleriaGrilla({product, images}){

    console.log(images);

    
    

    return( 
      <ul className={styles.locationGrilla}>
      

         <GaleriaFotos 
                 key={images.idImage}
                  listaDos={images}
                />   

         </ul> 
      
    );
    
  
   
}


   //  <GaleriaFotos 
   //              key={lista.idImage}
   //              listaDos={lista}
   //              /> 
             

//const {id}= useParams();

    //const imagesByproduct= images;
    
    //let nuevo;
   

    // for (let index = 0; index <images.length; index++) {
    //     nuevo=images[index].imageUrl ;
        
    // }
    // let idProd=product.idProduct;
    // console.log(idProd);
    
    
    //console.log(nuevo);
    //console.log(imagesByproduct);
    //console.log(images.imageUrl);

     //fotos consumo de base de datos
    // const url1="http://3.21.53.216:8080/images/product/" + idProd;
    // const [image, setImage]= useState([initialImage]);
    
    // useEffect(()=> {
    // const fetchApiImage = async (idProd) => {
    //     const response = await fetch(url1)
    //     const responseJSON= await response.json()
    //     setImage(responseJSON)
    // }
    // fetchApiImage(idProd)
    // }, [idProd])

    // console.log(image);

    //console.log(images)