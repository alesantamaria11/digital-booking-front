import styles from "./CardMyBookings.module.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

export function CardMyBookinks({bookings, category}) {
    //console.log(bookings.checkInDay);
    console.log(bookings);

    // let fechasInahabilitadas=[];
    // fechasInahabilitadas.push(bookings.checkInDay)
    // console.log(fechasInahabilitadas);



    //****consumo de imagenes */
     //fotos consumo de base de datos
     const url1="http://3.21.53.216:8080/images/product/";
     const [images, setImages]= useState(initialImages);

     const id=bookings.product.idProduct;
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

      let id1;
      for (let index = 0; index <images.length; index++) {
            id1=images[0].imageUrl ;
            //   images.length >0 ? id1=images[0].imageUrl : id1="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
      }

    return(
 <div className={styles.containerCardBooking}>
            <h2 className={styles.titleCardB}>Detalle de la reserva</h2>
            
            <div className={styles.contentCardsB}>
           
                <img src={id1 ? id1 : "https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png"} alt="" clasName={styles.imageCardBooking}/>
                
                
                {/* <img src={"https://i.pinimg.com/originals/86/9a/3d/869a3d717518649e84830348737c537e.jpg"}  alt="" clasName={styles.imageCardBooking}/>   */}
                
               <div className={styles.infoP}> 
                
                   <div className={styles.infoProduct}>
            
                        <div className={styles.headerCardI}>
                            <p>{bookings.product.category.categoryTitle}</p>
                            <h3>{bookings.product.productTitle}</h3>
                        </div>
                       
                    
                        <div className={styles.stars}>
                            <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                            <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                            <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                            <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                            <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
                        </div>
                    </div>
                    <div className={styles.ubicationCardB}>
                        <div className="fa">&#xf3c5;</div>
                        <p>{bookings.product.productTitle}</p>
                        
                    </div>
                    <div className={styles.checkIn}>
                        <p>Check in</p>
                        <p>{bookings.checkInDay}</p>
                       
                    </div>
                    <div className={styles.checkOut}>
                        <p>Check out</p>
                        <p>{bookings.checkOutDay}</p>
                        
                    </div>
                    {/* hacer un if, si logueado, guardar reserva, dino ir al login    */}
                    {/* <Link to='/'>      
                    <button type="submit" className={styles.buttonBooking}>Confimar reserva</button>
                    </Link>    */}
                      
                </div>
            </div>
        </div> 

        
    );
    
}