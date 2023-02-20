import {HeaderHome} from "./HeaderHome";
import { HeaderProducto } from "./HeaderProducto";
import { BloquePoliticas } from "./BloquePoliticas";
import { FooterHome } from "./FooterHome";
import {GridBooking} from "./GridBooking";
import styles from "./Booking.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const firstProduct={
    category:{
        idCategory:"",
        categoryTitle:""
    },
    city:{
        idCity:"",
        city:"",
        country:{}
    }
         
    
}

export function Booking(){

    const {id}=useParams();
    //console.log(id);
    
     // consumo API para mostrar detalle de producto a reservar

     const url="http://3.21.53.216:8080/products/get/";
     const [product, setProduct]= useState(firstProduct);
 
     useEffect(()=> {
         const fetchApi = async (id) => {
             const urlId= (url + id);
             console.log(urlId);
             const response = await fetch(urlId)
             const responseJSON= await response.json()
             setProduct(responseJSON)
   
         }
         fetchApi(id)
       
     }, [id])

   
   
    return(
        <div>
            <div>
                <HeaderHome />
            </div>
            <div>
                 <HeaderProducto key={product.idProduct} product={product}/>
            </div>
            <h2 className={styles.tittleBooking}>Completá tu datos</h2>
            <div>
                <GridBooking key={product.idProduct} product={product} />
            </div>
            <div>
                <BloquePoliticas />
            </div>
            <div>
                <FooterHome />
            </div>
        </div>

    );
}