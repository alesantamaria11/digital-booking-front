
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";
import DatePicker from "react-multi-date-picker"
import {DateObject} from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/layouts/prime.css";
//import InputIcon from "react-multi-date-picker/components/input_icon";
import "./Calendario.css";
import { useEffect } from 'react';

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export default function Example({updateSelectedDate1,updateSelectedDate2}) {
    const [values, setValues] = useState([]);

    //convierto las fechas en un string
    let fecha2=values.toString();
    console.log(fecha2);

    //let fechasFinales=fecha2.split(",")
    //console.log(fechasFinales);

    let fechasFinales2= fecha2.replaceAll("/", "-");
    console.log(fechasFinales2);
    let fechasFinales=fechasFinales2.split(",")
    console.log(fechasFinales);
    let checkIn;
    let checkOut;
    for (let index = 0; index < fechasFinales.length; index++) {
      checkIn = fechasFinales[0];
      checkOut= fechasFinales[1];
      
    }
    console.log(checkIn);
    console.log(checkOut);
    
    updateSelectedDate1(checkIn);
    updateSelectedDate2(checkOut);
   
     
      
     return(
      <>
      <DatePicker
      isClearable
      range
      rangeHover
      value={values}
      onChange={setValues}
      months={months}
      numberOfMonths={2}
      minDate={new DateObject()}
      //maxDate={new DateObject().add(30, "days")}
      placeholder={"       Check in - Check out"}
      style={{
         height: "33px",
         color:"black"
        }}
      className="teal"
      />
      {/*values?.toDate?.().toString()*/}

          </>
        
    
     );
    
    
  }








