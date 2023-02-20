import React from 'react';
import styles from './ArrivalTimeBlock.module.css';
import atomCheckTwo from "../assets/img/atomCheckTwo.png";
import { useState } from 'react';

export const ArrivalTimeBlock = () => {

  const [ arrivalTimeError, setArrivalTimeError ] = useState(false)
  const [ time, setTime ] = useState('')

  const handleTime=(e)=>{
    setTime(e.target.value)
    if(e.target.value !== ''){
      setArrivalTimeError(false)
    }
  }


  return (
    <div className={styles.container}>
      <div>
        <img 
            src={atomCheckTwo}
            alt='Check'/>
        <p> Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM </p>
      </div>
        <label> Indica tu horario estimado de llegada </label>
        <select
        name='time'
        value={time? time : 'default'} onChange={(e)=> handleTime(e)}
        required>
            <option value='default' disabled>Seleccionar hora de llegada</option>
            <option value='1'>01:00 AM</option>
            <option value='2'>02:00 AM</option>
            <option value='3'>03:00 AM</option>
            <option value='4'>04:00 AM</option>
            <option value='5'>05:00 AM</option>
            <option value='6'>06:00 AM</option>
            <option value='7'>07:00 AM</option>
            <option value='8'>08:00 AM</option>
            <option value='9'>09:00 AM</option>
            <option value='10'>10:00 AM</option>
            <option value='11'>11:00 AM</option>
            <option value='12'>12:00 AM</option>
            <option value='13'>01:00 PM</option>
            <option value='14'>02:00 PM</option>
            <option value='15'>03:00 PM</option>
            <option value='16'>04:00 PM</option>
            <option value='17'>05:00 PM</option>
            <option value='18'>06:00 PM</option>
            <option value='19'>07:00 PM</option>
            <option value='20'>08:00 PM</option>
            <option value='21'>09:00 PM</option>
            <option value='22'>10:00 PM</option>
            <option value='23'>11:00 PM</option>
            <option value='0'>12:00 PM</option>

        </select>


    </div>
  )
}
