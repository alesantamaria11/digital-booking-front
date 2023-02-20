//import styles from "./BodyHome.module.css";
import { CardsListado } from "./CardsListado";
import { Categoria } from "./Categoria";
import { HeaderHome } from "./HeaderHome";
import { FooterHome } from "./FooterHome";
import { NavPrincipal } from "./NavPrincipal";


import { useState } from "react";
import { useEffect } from "react";
//import { createContext } from "react";

//creacion del contexto

//export const selectedCityContex = createContext();


export function BodyHome(){ 
    

    //**inicio menu drawer */






//***fin menu drawer */


//**id seleccionado */
    const [idSelectedOption, setIdSelectedOption] = useState();

//**funcion para modificar el id city*/ 


useEffect(() =>{
    updateSelectedCity();
    }, []);

const updateSelectedCity = (newId) =>{
    setIdSelectedOption(newId);
    //console.log(idSelectedOption);
}

//para filtrar por categoria
const [idSelectedCategory, setIdSelectedCategory] = useState();

useEffect(() =>{
    updateSelectedCategory();
    }, []);

const updateSelectedCategory = (newCategoryId) =>{
    setIdSelectedCategory(newCategoryId);
    //console.log(idSelectedCategory);
}

//**filtro por fecha */
//**fecha seleccionada */
const [dateSelected1, setDateSelected1] = useState(null);
const [dateSelected2, setDateSelected2] = useState(null);


//**funcion para modificar la fecha seleccionada*/ 


useEffect(() =>{
    updateDateSelected1();
    }, []);

const updateDateSelected1 = (newDate) =>{
    setDateSelected1(newDate);
}
useEffect(() =>{
    updateDateSelected2();
    }, []);

const updateDateSelected2 = (newDate) =>{
    setDateSelected2(newDate);
}


console.log(dateSelected1);
console.log(dateSelected2);





    return(
        // <selectedCityContex.Provider value={0}>
        <div>  
            <div>
            <HeaderHome />
            
            
            </div>

            
            <div>
                <NavPrincipal updateSelectedCity={updateSelectedCity} updateDateSelected1={updateDateSelected1} updateDateSelected2={updateDateSelected2} />             
            </div>

            <div>
                <Categoria updateSelectedCategory={updateSelectedCategory}/> 
            </div>

            <div>
                <CardsListado idCity={idSelectedOption} idCategory={idSelectedCategory} dateSelected1={dateSelected1} dateSelected2={dateSelected2}/> 
            </div>

            <div>
                <FooterHome /> 
            </div>
            
    </div> 
    // </selectedCityContex.Provider>  
    );
}

  //const {id}= useParams();
     // console.log(id);
     //**filtrar por ciudad */
    // const updateProduct = (idCity) => {
    //    getProducts(idCity)
    //         .then((newProduct) =>{
    //               setProductCity(newProduct);
    //             //console.log(newProduct);
    //             })
    //     }





