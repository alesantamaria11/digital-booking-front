
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react"
//import DatePicker from "react-multi-date-picker"
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/layouts/prime.css";
import "./CalendarioReserva.css";
import { Calendar } from 'react-multi-date-picker';
import { DateObject } from 'react-multi-date-picker';
import { useEffect } from 'react';
//import { GridBooking } from './GridBooking';

const initialBookProd={
  //"idBooking": 1,
  checkInDay: "",
  checkOutDay: "",
  product: {
      idProduct: "",
      productTitle: "",
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
  },
  user: {
      idUser: "",
      userName: "",
      userLastName: "",
      userEmail: "",
      userPassword: "",
      role: {
          idRole: "",
          roleName: ""
      }
  }
}


const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export default function CalendarioReserva({updateSelectedDate, product}) {

  const [ values, setValues ] = useState([]);
   

   
  const fecha2=values.toString();
  let fecha3= fecha2.replaceAll("/", "-");
    //let datesCheck = [];
    //datesCheck.push(fecha2);
    //let[checkIn, checkOut] = datesCheck.split(',');
    //console.log(datesCheck);
    
     updateSelectedDate(fecha3);

// ***consumo reservas para el disabled

     const url="http://3.21.53.216:8080/bookings/product/";
     const [bookProd, setBookPro]= useState([initialBookProd]);
 
   let idProduct=product.idProduct;
 
     useEffect(()=> {
         const fetchApiBo = async (idProduct) => {
             const urlId= (url + idProduct);
             console.log(urlId);
             const response = await fetch(urlId)
             const responseJSON= await response.json()
             setBookPro(responseJSON)
   
         }
         fetchApiBo(idProduct)
       
     }, [idProduct])

     console.log(bookProd);
     //*** guardado de fechas para inhabilitar */
    //  let fechasInhabilitadas=[];

    //  bookProd.map((lista) => {
    //   fechasInhabilitadas.push(lista.checkInDay,lista.checkOutDay)
    //  })
    // fechasInhabilitadas.push(bookProd.checkInDay, bookProd.checkOutDay)


     console.log(idProduct);

     //console.log(fechasInhabilitadas);
  
     return(
      <>
      <Calendar 
      range
      rangeHover
      value={values}
      onChange={setValues}
      months={months}
        //minDate={new Date()}
      //maxDate={new Date().setStartDate(10)}
      minDate={new DateObject()}
    //   mapDays={({ date }) => {
    //     let isDisable = [0, 6].includes(date.weekDay.index)
        
    //     if (isDisable) return {
    //       disabled: true,
    //       style: { color: "#ccc" }
    //     }
    //   }
    // }

      //maxDate={new DateObject().add(30, "days")}
      
      numberOfMonths={2}
      className="teal"
     
      /> 
      {/* <GridBooking  fechas={fecha2} />
       */}
      
      </>
     );
    

    
  }








