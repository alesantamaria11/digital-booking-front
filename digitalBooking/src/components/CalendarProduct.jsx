import { Calendar, DateObject } from "react-multi-date-picker";
import { useState } from "react";
import "./CalendarProduct.css";


const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
export default function CalendarProduct() {

    const [ startDate, setStartDate ] = useState();
      
     return(
      <Calendar 
      range
      rangeHover
      value={startDate}
      onChange={setStartDate}
      months={months}
      minDate={new DateObject()}
      //maxDate={new Date().setDate(15)}
      numberOfMonths={2}
      className="teal"
      /> 
     
     
     );
    
  }