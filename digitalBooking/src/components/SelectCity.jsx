//import ciudades from "../ciudades.json";
import "./SelectCity.css"
import { useState } from "react";
import { useEffect } from "react";
import getCities from "../services/getCities"
//import { useContext } from "react";
//import { selectedCityContex } from "./BodyHome";



export function SelectCity({updateSelectedId}){
    //**recibe funcion desde el home */
 
    

    //**consumo de la API */

    const [allCities, setAllCities] = useState();
    //console.log(allCities);

    useEffect(()=>{
        updateCities();

    }, []);

    const updateCities = () =>{
        getCities()
            .then((newCities) =>{
                setAllCities(newCities);
            })
    }

    //**filtro producto por ciudad */
    //const [productByCity, setProductByCity] = useState();

    // const handleInputChange =({target}) =>{
    //     setProductByCity(target.value);
    //     console.log(target);
        
    // }
   
    
    //**seleccion */

    const[isOpen, setIsOpen]=useState(false);

    //**mostrar la ciudad */

    const[selectedOption, setSelectedOption]=useState(null);



    //**id seleccionado */ este es el estado que debo pasar al home
    const [idOption, setIdOption] = useState(0);

    //**controlador de clicks *
    const toggling = ()=> setIsOpen(!isOpen);
   
    //**capturar la ciudad y mostrarla
    const onOptionClicked = value =>() =>{
        setSelectedOption(value.city);
        setIsOpen(false);
        setIdOption(value.idCity)
        
        //alert("la funcion cambio");
        
    };
    console.log(idOption);
    updateSelectedId(idOption);
    


    

    

    

    return(
        <div className="contenedorSelector"> {/*es app */}
         {/* <form action="" >   */}
         
                <div className="selectbox" onClick={toggling} >  {/*es el contenedor */}
                
                    <div className="selectCity" id="selectCity"> {/*es el header*/}
                    
                        <div className="iconLocationSelect">
                            <div className="fa"> &#xf3c5;</div>
                        </div>
                        {selectedOption || 
                        <div className="contentsSelect" id="contentsSelect">
                     
                            <h3 className="titles">¿A dónde vamos?</h3>
                            <p className="descriptions"></p> 
                        </div>  
                        } 
                          
                    </div>
                   
            

                    {isOpen && (
                        <div className={`options ${isOpen &&"active"}`} > {/*agregar active*/} {/*es el contenedor de la lista */}
                        {/* opciones */}
                        {/* eliminar etiqueta a ver que sucede */}
                        <a href="#" className="optionSelect" >{/* down list */}
                                    {
                                        allCities.map((ciudad)=>(
                                            // <div className="contentsOption" onClick={onOptionClicked(ciudad.city) && handleInputChange(ciudad.idCity) }
                                            <div className="contentsOption" onClick={onOptionClicked(ciudad)} key={ciudad.idCity} value={ciudad.idCity} > {/*lista items */}
                                                <div className="iconLocationOption">
                                                    <div className="fa"> &#xf3c5;</div>
                                                </div>
                                                <div className="textsOption" >
                                                    <h3 className="titles" >{ciudad.city}</h3>
                                                    <p className="descriptions">{ciudad.country.country}</p>
                                                </div>
                                            </div>
                                            ))
                                        
                                        }
                        </a>                 
                       
                    </div>
                    
                    )}
                   
                    
                </div>
                
            {/* </form>  */}

        </div>
    )
}

// onChange={()=>alert("producto cambiado")}

//**capturar un id

 //**id seleccionado */

 //const [idSelected, setIdSelected]= useState();
    //  const idOptionClicked = value =>() =>{
    //     setIdSelected(value);
    //     //alert("la funcion cambio");
        
    // };
    // console.log(idSelected);
   
