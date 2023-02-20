import { FooterHome } from "./FooterHome";
import { HeaderHome } from "./HeaderHome";
import { HeaderProducto } from "./HeaderProducto";
import { GaleriaGrilla } from "./GaleriaGrilla";
import { UbicationBlock } from "./UbicationBlock";
import { BloqueCaracteristicas } from "./BloqueCaracteristicas";
import { BloqueDescripcion } from "./BloqueDescripcion";
import { BloquePoliticas } from "./BloquePoliticas";
import { BloqueCalendario } from './BloqueCalendario';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const initialProduct={
    category:{
        idCategory:"",
        categoryTitle:""
    },
    city:{
        idCity:"",
        city:"",
        country:{}
    },
    characteristics: [
        {
            "idCharacteristic": "",
            "characteristicName": "",
            "characteristicImage": "",
            "characteristicDescription": ""
        }
    ]
    
}

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




export function Producto(){

    
    const {id}= useParams();
    //console.log(id);
    
    const url="http://3.21.53.216:8080/products/get/";
    const [oneProduct, setOneProduct]= useState(initialProduct);

  

    useEffect(()=> {
        const fetchApi = async (id) => {
            const urlId= (url + id);
            console.log(urlId);
            const response = await fetch(urlId)
            const responseJSON= await response.json()
            setOneProduct(responseJSON)
  
        }
        fetchApi(id)
      
    }, [id])

    //****consumo de imagenes */
     //fotos consumo de base de datos
    const url1="http://3.21.53.216:8080/images/product/";
    const [images, setImages]= useState(initialImages);
     
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

     //****consumo de caracteristicas */
     //fotos consumo de base de datos
    // const url3="http://3.21.53.216:8080/images/product/";
    // const [caracteristicas, setcaracteristicas]= useState(initialImages);
     
    //  useEffect(()=> {
    //  const fetchApiImage = async (id) => {
    //     const urlId1= (url1 + id);
    //     console.log(urlId1);
    //      const response = await fetch(urlId1)
    //      const responseJSON= await response.json()
    //      setImages(responseJSON)
    //  }
    //  fetchApiImage(id)
    //  }, [id])

    //  console.log(images);

     


    
    return(
        
        <div>
           
            <div>
                <HeaderHome />
            </div>
            
            <div>
                <HeaderProducto key={oneProduct.idProduct} product={oneProduct} />
            </div> 
       
            <div>
                <UbicationBlock key={oneProduct.id} product={oneProduct} />
            </div> 
           
            <div>
                <GaleriaGrilla product={oneProduct} key={images.idImage} images={images}/>
                
            </div>
            <div>
                <BloqueDescripcion key={oneProduct.idProduct} product={oneProduct}/>
            </div> 
            <div>
                <BloqueCaracteristicas key={oneProduct.idProduct} product={oneProduct}/>
            </div>
           <div>
                <BloqueCalendario key={oneProduct.idProduct} product={oneProduct}/>
           </div>  
            <div>
                <BloquePoliticas key={oneProduct.idProduct} product={oneProduct}/>
            </div>
            <div>
                <FooterHome />
            </div>

           
        </div>
       
    );
}


