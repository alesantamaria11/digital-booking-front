import styles from "./CardsListado.module.css"
//import listado from "../listado.json";
import { Cards } from "./Cards";
import { useEffect } from "react";
import { useState } from "react";
//import getProducts from "../services/getProducts";
//import { Producto } from "./Producto";



export function CardsListado({idCity, idCategory, dateSelected1, dateSelected2}){
    console.log(idCity);
    console.log(idCategory);
    console.log(dateSelected1);
    console.log(dateSelected2);

  
    //***cambio de url local a url de la base:*** http://3.21.53.216:8080
   

    let url;
    let urlCategory;
    let urlDates;
    let urlDates1;

    const [allProducts, setAllProducts]= useState([]);
    

    

    //filtro por categorias:
    
    if((!idCategory || idCategory === 0) && (!idCity || idCity === 0) && (!dateSelected1 || !dateSelected2) ){
        //urlCategory="http://3.21.53.216:8080/products/random-list";
        urlCategory="http://3.21.53.216:8080/products/list";
    }else{
        urlCategory="http://3.21.53.216:8080/products/category/" + idCategory;

    }

    //const [products, setProducts]= useState([]);
    const fetchApiCategory = async (idCategory) => {
        const response = await fetch(urlCategory)
        const responseJSON= await response.json()
        setAllProducts(responseJSON)
    }
    useEffect(()=> {
        fetchApiCategory ()
    }, [idCategory])

    


  
 

 /* ****filtro por fechas y ciudad**** */
        if((!idCity || idCity === 0) && (!dateSelected1 || !dateSelected2) ){ 
            urlDates1="http://3.21.53.216:8080/products/list";
            //urlDates1="http://3.21.53.216:8080/products/random-list";
        }else if((idCity && idCity !== 0) && (!dateSelected1 || !dateSelected2)){
            urlDates1="http://3.21.53.216:8080/products/city/" + idCity;   
                //"http://3.21.53.216:8080/products/search?date_in=2022-01-21&date_out=2023-07-25"
        }else if((!idCity || idCity === 0) && (dateSelected1 && dateSelected2)){
            urlDates1=`http://3.21.53.216:8080/products/search-date?date_in=${dateSelected1}&date_out=${dateSelected2}`
        }else{
            urlDates1=`http://3.21.53.216:8080/products/search?date_in=${dateSelected1}&date_out=${dateSelected2}&id_city=${idCity}`;
        }
        
            //ciudad
     const fetchApi = async (idCity) => {
        const response = await fetch(urlDates1)
        const responseJSON= await response.json()
        setAllProducts(responseJSON)
    }
     useEffect(()=> {
         fetchApi()
     }, [idCity])

     //fecha

     const fetchApiFechas = async (dateSelected1, dateSelected2) => {
        const response = await fetch(urlDates1)
        const responseJSON= await response.json()
        console.log(responseJSON);
        setAllProducts(responseJSON)
    }
    useEffect(()=>{  
        fetchApiFechas();
        
    },[dateSelected1, dateSelected2])
 
    //fecha y ciudad
    const fetchApiFechasYciudad = async (idCity, dateSelected1, dateSelected2) => {
        const response = await fetch(urlDates1)
        const responseJSON= await response.json()
        console.log(responseJSON);
        setAllProducts(responseJSON)
    }
    useEffect(()=>{ 

        fetchApiFechasYciudad();
        
    },[idCity, dateSelected1, dateSelected2])


    console.log(urlDates);
    console.log(urlDates1);

    console.log(allProducts);


    return(
        <div className={styles.general}>
        <h2 className={styles.listTitle}>Recomendaciones</h2>
        <ul className={styles.locationGrid}>
        {allProducts.map((lista)=>
            <Cards 
            key={lista.idProduct} 
            lista={lista}
            
            /> 
        )
        }
    
    </ul>
    </div> 
    ); 
}

//TRAYENDOLO DEL SERVICE

    // const [allProducts, setAllProducts]= useState();
    // console.log(allProducts);

    // useEffect(() =>{
    //     updateProduct();
    // }, []);

    // const updateProduct = () => {
    //     getProducts()
    //         .then((newProducts) =>{
    //             setAllProducts(newProducts);
               
    //         })
    // }

    //ooook
 
     //***filtro por ciudad */

    // if((!idCity || idCity === 0) && (!dateSelected1 || !dateSelected2)) {
    //     url="http://3.21.53.216:8080/products/list";
    
    // }else{
    //     url="http://3.21.53.216:8080/products/city/" + idCity;
    // }

     
    // const fetchApi = async (idCity) => {
    //     const response = await fetch(url)
    //     const responseJSON= await response.json()
    //     setAllProducts(responseJSON)
    // }
    // useEffect(()=> {
    //     fetchApi()
    // }, [idCity])

      /* ****filtro por fechas**** */
 
    // if(!dateSelected1 || !dateSelected2){
    //     urlDates="http://3.21.53.216:8080/products/list";
    // }else{
                
    //     urlDates=`http://3.21.53.216:8080/products/search-date?date_in=${dateSelected1}&date_out=${dateSelected2}`;   
    //             //"http://3.21.53.216:8080/products/search-date?date_in=2022-01-21&date_out=2023-07-25"
    // }
    
    
    //     const fetchApiFechas = async (dateSelected1, dateSelected2) => {
    //         const response = await fetch(urlDates)
    //         const responseJSON= await response.json()
    //         console.log(responseJSON);
    //         setAllProducts(responseJSON)
    //     }
    // useEffect(()=>{  
    //     fetchApiFechas();
        
    // },[dateSelected1, dateSelected2])

    
   //ooook
