import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CalendarProduct from "./CalendarProduct";
import './BloqueCalendario.css';
import Swal from 'sweetalert';




export const BloqueCalendario = ({product}) => {

    const [user, setUser] = useState(0);
    //const Navigate = useNavigate();

  useEffect(() => {
    // console.log("-----------------------------");
    // console.log(localStorage.getItem("userLogged"));
    // console.log(JSON.parse(localStorage.getItem("userLogged")));

    if (localStorage.getItem("userLogged")) {
      setUser(JSON.parse(localStorage.getItem("userLogged")));
    }

  }, []);

  //const [validateLogin, setValidateLogin] = useState(false);





    
  return (
    <div className='bloquecal-container'>
        <h3 className='title-fechas'>Fechas disponibles</h3>

        <div className='calendar-block'>

            <div className='calendario-container'>
                <CalendarProduct />
            </div>

            <div className='container-agrega'>
                <label className='label-agrega'>Agrega tus fechas de viaje para obtener precios exactos</label>
                {/* <Link to={`/producto/${product.idProduct}/reserva`}> 
                <button className='button-reserva' > Iniciar reserva </button>
                </Link>  */}


                <Link to={user ? `/producto/${product.idProduct}/reserva` :  '/login'}> 
                <button className='button-reserva' > Iniciar reserva </button>
                </Link> 


            </div>
        </div>
     </div>
  )
 }

