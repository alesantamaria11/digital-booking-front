import styles from "./CardBooking.module.css";
import imageCardB from "../assets/img/id6.jpg";

//import lista from "../listado2.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//style={{display:"flex", flexDirection:"column", padding:"21px"}}


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


export function CardBooking({product, selectedDate,}){


//fotos consumo de base de datos
const url1="http://3.21.53.216:8080/images/product/";
const [images, setImages]= useState(initialImages);

const id=product.idProduct;
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
 //let imgPortadaAlter;
 let id1;
 for (let index = 0; index <images.length; index++) {
        //images.length >0 ? id1=images[0].imageUrl : id1="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
          id1=images[0].imageUrl;
 }

 console.log(id1);




    const [user, setUser] = useState(0);

    useEffect(() => {
    
        if (localStorage.getItem("userLogged")) {
          setUser(JSON.parse(localStorage.getItem("userLogged")));
        }
    
      }, []);
    
      let checkIn=selectedDate.slice(0,-11);
      let checkOut=selectedDate.slice(-10);
 
     
 
     let user1={
         "idUser": 1,
         "userName": "Alejandra",
         "userLastName": "Santamaria",
         "userEmail": "as@gmail.com",
         "userPassword": "ale",
         "role": {
             "idRole": 1,
             "roleName": "usuario"
         }
     }
 
 
 
     let user2 = {};
 
     if (user !== 0) {
     user2={
         "idUser": user.id,
         "userName": user.name,
         "userLastName": user.lastname,
         "userEmail": user.email,
         "userPassword": "xxxx",
         "role": {
             "idRole": 1,
             "roleName": user.rol
         }
     }
 
 }
 
 console.log("user ---------------");
 console.log(user);
 console.log(user1);
 console.log(user2);
 
 
 
 
      // consumo API para guardar reserva OJO 
     const urlSave="http://3.21.53.216:8080/bookings/save";
     //const [oneBooking, setOneBooking]= useState();
 
     var data = {
     //    "idBooking": 1,
         "checkInDay": checkIn,
         "checkOutDay": checkOut,
         "product": product,
         //"user": user2
         "user": {"idUser": user.id}
         }
     // console.log(data);
  
       const handleBooking = ()=>{
         //e.preventDefault();
         fetch(urlSave, {
             method: 'POST', // or 'PUT'
             body: JSON.stringify(data), // data can be `string` or {object}!
             headers:{
               'Content-Type': 'application/json'
             }
           }).then(res => res.json())
           .catch(error => console.error('Error:', error))
           .then(response => console.log('Success:', response));
      
       }    
 
     return(
         <div className={styles.containerCardBooking}>
             <h2 className={styles.titleCardB}>Detalle de la reserva</h2>
             
             <div className={styles.contentCardsB}>
                 
                 {/* <img src={product.category.categoryImage}  alt="" clasName={styles.imageCardBooking}/>   */}
                 <img src={id1 ? id1 : "https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png"} alt="" clasName={styles.imageCardBooking}/>
                <div className={styles.infoP}> 
                 
                    <div className={styles.infoProduct}>
             
                         <div className={styles.headerCardI}>
                              <p>{product.productTitle}</p> 
                              <h3>{product.category.categoryTitle}</h3>  
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
                         <p>{product.city.city+", "+ product.city.country.country}</p>
                         {/* <p>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p> */}
                         
                     </div>
                     <div className={styles.checkIn}>
                         <p>Check in</p>
                         <p>{checkIn}</p>
                        
                     </div>
                     <div className={styles.checkOut}>
                         <p>Check out</p>
                         <p>{checkOut}</p>
                         
                     </div>
                     {/* hacer un if, si logueado, guardar reserva, dino ir al login    */}
                     <Link to='/reserva-exitosa'>      
                     <button type="submit" className={styles.buttonBooking} onClick={handleBooking}>Confimar reserva</button>
                     </Link>   
                       
                 </div>
             </div>
         </div>
 
     );

























    //     console.log(product);
//     console.log(selectedDate);

//      //let datesCheck = [];
//     //datesCheck.push(selectedDate);
//    //console.log(datesCheck);
    

//    const [user, setUser] = useState(0);





//    useEffect(() => {
//        // console.log("-----------------------------");
//        // console.log(localStorage.getItem("userLogged"));
//        // console.log(JSON.parse(localStorage.getItem("userLogged")));
   
//        if (localStorage.getItem("userLogged")) {
//          setUser(JSON.parse(localStorage.getItem("userLogged")));
//        }
   
//      }, []);

   
//      console.log(selectedDate);
//      let checkIn=selectedDate.slice(0,-11);
//      let checkOut=selectedDate.slice(-10);

//     //  let user1= {
//     //     "idUser": user.id,
//     //     "userName": user.name,
//     //     "userLastName": user.lastname,
//     //     "userEmail": user.email,
//     //     "userPassword": user.token,
//     //     "role": user.rol
//     // }

//     console.log(user.rol.id);
//     console.log(user.email);
//     console.log(user.id);
//     console.log(user.token);

//     let user1={
//         "idUser": 4,
//         "userName": "Mica",
//         "userLastName": "Soriano",
//         "userEmail": "soriano@gmail.com",
//         "userPassword": "$2a$10$8NjcBXhyg5xcY.DHJaSibOG0AYemUMev1UNAmp6Jj1mz.N79BZUuu",
//         "role": {
//             "idRole": 1,
//             "roleName": "ROLE_USER"
//         }
//     }

//     // id: user.user_id,
//     // rol: user.authorities[0].authority,
//     // name: user.name,
//     // lastname: user.last_name,
//     // email: user.sub,

//      // consumo API para guardar reserva OJO 
//     const urlSave="http://3.21.53.216:8080/bookings/save";
//     //const [oneBooking, setOneBooking]= useState();

//     var data = {
//     //    "idBooking": 1,
//         "checkInDay": checkIn,
//         "checkOutDay": checkOut,
//         "product": product,
//         "user": user1
//     }
//     console.log(data.user);
 
//       const handleBooking = ()=>{
//         //e.preventDefault();
//         fetch(urlSave, {
//             method: 'POST', // or 'PUT'
//             body: JSON.stringify(data), // data can be `string` or {object}!
//             headers:{
//               'Content-Type': 'application/json'
//             }
//           }).then(res => res.json())
//           .catch(error => console.error('Error:', error))
//           .then(response => console.log('Success:', response));
     
//       }    

//     return(
//         <div className={styles.containerCardBooking}>
//             <h2 className={styles.titleCardB}>Detalle de la reserva</h2>
            
//             <div className={styles.contentCardsB}>
                
//                 <img src={product.category.categoryImage}  alt="" clasName={styles.imageCardBooking}/>  
                
//                <div className={styles.infoP}> 
                
//                    <div className={styles.infoProduct}>
            
//                         <div className={styles.headerCardI}>
//                              <p>{product.productTitle}</p> 
//                              <h3>{product.category.categoryTitle}</h3>  
//                         </div>
                       
                    
//                         <div className={styles.stars}>
//                             <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
//                             <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
//                             <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
//                             <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
//                             <ion-icon name="star" style={{ color: "#1DBEB4" }}></ion-icon>
//                         </div>
//                     </div>
//                     <div className={styles.ubicationCardB}>
//                         <div className="fa">&#xf3c5;</div>
//                         <p>{product.city.city+", "+ product.city.country.country}</p>
//                         {/* <p>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p> */}
                        
//                     </div>
//                     <div className={styles.checkIn}>
//                         <p>Check in</p>
//                         <p>{checkIn}</p>
                       
//                     </div>
//                     <div className={styles.checkOut}>
//                         <p>Check out</p>
//                         <p>{checkOut}</p>
                        
//                     </div>
//                     {/* hacer un if, si logueado, guardar reserva, dino ir al login    */}
//                     <Link to='/reserva-exitosa'>      
//                     <button type="submit" className={styles.buttonBooking} onClick={handleBooking}>Confimar reserva</button>
//                     </Link>   
                      
//                 </div>
//             </div>
//         </div>

//     );
 }


