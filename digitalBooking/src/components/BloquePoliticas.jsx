import React from 'react'
import styles from './PolicyBlock.module.css'

export const BloquePoliticas = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.titleContainer}>
        ¿Que tenés que saber?
      </h3> 

      <hr className={styles.line}/>

      <div className={styles.grid}>
      
        <section>
          <label className={styles.titleContent}>
            Normas de la casa
          </label>
          <p className={styles.paragraphContent}>
            Check-out: 10:00 <br />
            No se permiten fiestas <br />
            No fumar <br />
          </p>
        </section>

        <section>
          <label className={styles.titleContent}>
            Salud y seguridad
          </label>
          <p className={styles.paragraphContent}>
            Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus <br />
            Detector de humo <br />
            Depósito de seguridad <br />
          </p>
        </section>

        <section>
          <label className={styles.titleContent}>
            Politica de cancelación
          </label>
          <p className={styles.paragraphContent}>
            Agregá las fechas de tu viaje para obtener los detalles de cancelación de la estadía
          </p>
        </section>
      
      </div>
    
    </div>
  )
};
