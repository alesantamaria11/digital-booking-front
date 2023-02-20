import React from 'react';
import styles from './DescriptionBlock.module.css';

export const BloqueDescripcion = ({product}) => {
  return (
    <div>
      <h3 className={styles.title}>Alójate en:</h3>
      <p className={styles.content}>
        {product.productDescription}
      </p> 
    </div>
//     <div>
//     <p className={styles.content}>
//     Esta situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del Parque San Martin y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la cale Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal.
//     <br />
//     Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes.
//     <br />
//     El hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, useos y zonas comerciales. Además, hay Wifi gratuito. El establecimiento sirve un desayuno variado de 07:00 a 10:30 hs.
//   </p> 
// </div>
  )
}
