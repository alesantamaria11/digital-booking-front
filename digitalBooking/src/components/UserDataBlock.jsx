
import React from 'react';
import styles from './UserDataBlock.module.css';
import { useState, useEffect } from 'react';

export const UserDataBlock = () => {

  const [ city, setCity ] = useState('')

  const handleCity = (e) =>{
    setCity(e.target.value);
  }

  const [user, setUser] = useState(0);

  useEffect(() => {
    // console.log("-----------------------------");
    // console.log(localStorage.getItem("userLogged"));
    // console.log(JSON.parse(localStorage.getItem("userLogged")));

    if (localStorage.getItem("userLogged")) {
      setUser(JSON.parse(localStorage.getItem("userLogged")));
    }

  }, []);

  

  return (
    <div className={styles.container}>
    <form>
    <div className={styles.box}>
      
      <div>
        <label className={styles.userName}>
          Nombre
        </label>
        <input 
          disabled
          value={user.name}
          type='text'
          name='userName'
          placeholder=''
          />

      </div>
      
      <div>
        <label className={styles.userLastName}>
          Apellido
        </label>
        <input 
          disabled
          value={user.lastname}
          type='text'
          name='userLastName' />
      </div>
      
      <div>
        <label className={styles.email}>
          Correo electrónico
        </label>
        <input 
          disabled
          value={user.email}
          type='text'
          name='email' />
      </div>
      
      <div>
        <label className={styles.city}>
          Ciudad
        </label>
        <input 
          onChange={(e)=>handleCity(e)}
          value={city}
          type='text'
          name='city'
          placeholder='Ciudad'
          autoComplete='off' />
      </div>


    </div>
    


    </form>

    </div>
  )
}
