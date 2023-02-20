//import React, { useState } from "react";
import styles from "./NavPrincipal.module.css";
import Calendario from "./Calendario";
import { SelectCity } from "./SelectCity";
//import { useContext } from "react";
//import { selectedCityContex } from "./BodyHome";
import { useState } from "react";
import { useEffect } from "react";



export function NavPrincipal({updateSelectedCity , updateDateSelected1, updateDateSelected2}) {



    const handleNavClick = (e)=>{
        e.preventDefault();
        updateSelectedCity(selectedId);
        updateDateSelected1(selectedDate1);
        updateDateSelected2(selectedDate2);
       

    } 

    //**opcion seleccionada filtro por ciudad
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() =>{
        
        updateSelectedId();
       
        }, []);


    const updateSelectedId = (newOption) => {
        setSelectedId(newOption);
    };

    console.log(selectedId);

    //**opcion seleccionada filtro por fecha
    const [selectedDate1, setSelectedDate1] = useState();
    const [selectedDate2, setSelectedDate2] = useState();
    
   
    useEffect(() =>{
        
        updateSelectedDate1(selectedDate1);
        updateDateSelected2(selectedDate2);
       
        
        }, []);


    const updateSelectedDate1 = (newDate) => {
        setSelectedDate1(newDate);
    };

    const updateSelectedDate2 = (newDate) => {
        setSelectedDate2(newDate);
    };
    

    console.log(selectedDate1);
    console.log(selectedDate2);
  
    
   
    

    return (

        <div className={styles.buscadorPrincipal}>
            <h1 className={styles.mainTitle}>Busca ofertas en hoteles, casas y mucho más</h1>
            
            <form className={styles.formPrincipal}>
            <label className={styles.destino}>

                <SelectCity  updateSelectedId={updateSelectedId}/>
            
            </label>
            <label className={styles.calendarPrincipal}>
                <div className={styles.iconCalendarNav}>
                    <div className="fa"> &#xf133;</div>
                </div>
            
            <Calendario updateSelectedDate1={updateSelectedDate1} updateSelectedDate2={updateSelectedDate2}/>
        
            </label>
            

            <button type="submit" value="Buscar" placeholder='Buscar' className={styles.buscar}  onClick={handleNavClick}>Buscar</button>
        </form>
    </div>
   
    );
}


             