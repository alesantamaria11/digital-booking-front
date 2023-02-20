import { CardBooking } from "./CardBooking";
import styles from "./GridBooking.module.css";
import CalendarioReserva from "./CalendarioReserva";
import { UserDataBlock } from "./UserDataBlock";
import { ArrivalTimeBlock } from "./ArrivalTimeBlock";
import { useState , useEffect } from "react";


export function GridBooking({product}){

    //**fecha seleccionada
    const [selectedDate, setSelectedDate] = useState([]);

    useEffect(() =>{
        updateSelectedDate();
        }, []);


    const updateSelectedDate = (newOption) => {
        setSelectedDate(newOption);
    };

    console.log(selectedDate);


    return(
        <div className={styles.containerBodyBooking}>
            <div className={styles.informationBooking}>
                
                <div>
                    <UserDataBlock />
                </div>
                <div className={styles.calendarioR}>
                    <CalendarioReserva updateSelectedDate={updateSelectedDate} key={product.id} product={product}/>
                    {/* <CalendarioReserva propsAlpadre={propsAlpadre}/> */}
                </div>
                <div>
                    <ArrivalTimeBlock />
                </div>

            </div>
            <div className={styles.cardBooking}>
                <CardBooking key={product.idProduct} product={product} selectedDate={selectedDate}/>

            </div>


        </div>
    );
}