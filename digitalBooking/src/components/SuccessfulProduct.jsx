import React from 'react';
import styles from './SuccessfulProduct.module.css';
import { Link } from 'react-router-dom';
import { HeaderHome } from './HeaderHome';
import { FooterHome } from './FooterHome';
import atomCheck from "../assets/img/atomCheck.png"

export const SuccessfulProduct = () => {
  return (
    
      <div className={styles.container}>
        <HeaderHome />
        
          <div className={styles.messageBox}>
            <img 
            src={atomCheck}
            alt='Check'/>
            <text>
              Tu propiedad se ha creado con éxito.
            </text>
            <Link to='/'>
              <button>
                volver
              </button>
            </Link>

          </div>
          <FooterHome />
        </div>

				
  

  )
};