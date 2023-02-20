import React from 'react';
import styles from './SuccessfulBooking.module.css';
import { Link } from 'react-router-dom';
import { HeaderHome } from './HeaderHome';
import { FooterHome } from './FooterHome';
import atomCheck from "../assets/img/atomCheck.png"

export const SuccessfulBooking = () => {
  return (
    
      <div className={styles.container}>
        <HeaderHome />
        
          <div className={styles.messageBox}>
            <img 
            src={atomCheck}
            alt='Check'/>
            <h1>
              ¡Muchas gracias!
            </h1>
            <text>
              Su reserva se ha realizado con éxito
            </text>
            <Link to='/'>
              <button>
                ok
              </button>
            </Link>

          </div>
          <FooterHome />
        </div>

				
  

  )
};