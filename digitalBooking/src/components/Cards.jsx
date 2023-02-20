import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
//import { Producto } from "./Producto";
import { useEffect, useState } from "react";
import imgNoDisponible from "../assets/img/imgNoDisponible.jpg"



const initialImages={
    idImage:"",
    imageTitle:"",
    imageUrl:"",
    product:{
        idProduct:"",
        productTitle:"",
        productDescription: "",
        category: {
            idCategory: "",
            categoryTitle: "",
            categoryDescription: "",
            categoryImage: ""
        },
        city: {
            idCity: "",
            city: "",
            country: {
                idCountry: "",
                country: ""
            }
       }

    }       
    
}


export function Cards({lista}){

    // const pasarProps=()=>{
    //     <Producto key={lista.idProduct} {lista} />
    // }

//****consumo de imagenes */
     //fotos consumo de base de datos
     const url1="http://3.21.53.216:8080/images/product/";
     const [images, setImages]= useState(initialImages);

     const id=lista.idProduct;
     //console.log(id);
      
      useEffect(()=> {
      const fetchApiImage = async (id) => {
         const urlId1= (url1 + id);
         console.log(urlId1);
          const response = await fetch(urlId1)
          const responseJSON= await response.json()
          setImages(responseJSON)
      }
      fetchApiImage(id)
      }, [id])
 
      console.log(images);
      let imgPortadaAlter;
      let id1;
      for (let index = 0; index <images.length; index++) {
             //images.length >0 ? id1=images[0].imageUrl : id1="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
               id1=images[0].imageUrl;
      }

      console.log(id1);




    return(
        <li className={styles.locationCards}>
            
            <div className={styles.containerImageCards}>
                {/* <div className={styles.containerIconHeart}><ion-icon name="heart" style={{ color: "#fff" }}></ion-icon></div> */}
                {/* <img src={lista.image.idProduct} 
                alt={lista.product.productTitle} 
                className={styles.locationImage}
                /> */}
                <img src={id1 ? id1 : "https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png"} 
                alt={lista.productTitle} 
                className={styles.locationImage}
                />
            </div>


            <div className={styles.locationInformation}>
                <div className={styles.containerCategory}>
                <p className={styles.txtCategory}>{lista.category.categoryTitle}</p>
                <div className={styles.starsScoreC}>
                    <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                    <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                    <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                    <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                    <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                </div>
                </div>
                    <div className={styles.containerTitle}>
                        <p className={styles.txtTitle}>{lista.productTitle}</p>
                        <div className={styles.containerStatus}>
                            <div className={styles.figureNumber}>
                                <p className={styles.numberScore}>8</p>
                            </div>
                            <p className={styles.txtStatus}>Muy bueno</p>
                        </div>
                    </div>
                    <div className={styles.containerLocation}>
                            <ion-icon name="location"></ion-icon>
                            <p className={styles.txtLocation}>{lista.city.city}<span className={styles.txtMoreLocation}>MOSTRAR EN EL MAPA</span></p>
                    </div>
                    <div className={styles.containerIcons}>
                            <ion-icon name="wifi-outline"></ion-icon>
                            <ion-icon name="boat-outline"></ion-icon>
                    </div>
                    <div className={styles.containerDescription}>
                            <p className={styles.txtDescription}>{lista.productDescription}<span className={styles.txtMore}> más...</span></p>
                    </div>
                        <Link to={`/producto/${lista.idProduct}`} > 
                        <div className={styles.buttonContainer}><button className={styles.buttonContainer}>ver más</button></div>
                        </Link>
            </div>
           
            
        </li>
    );
}

