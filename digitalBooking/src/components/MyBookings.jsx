import { useEffect, useState } from "react";
import { HeaderHome } from "./HeaderHome";
import { FooterHome } from "./FooterHome";
import { CardMyBookinks } from "./CardMyBookings";
import styles from "./MyBookings.module.css"





const initialBook={
    //"idBooking":"",
    checkInDay:"",
    checkOutDay:"",
    product:{
        idProduct:"",
        productTitle:"",
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

    }
         
    
}




export function MyBookings(){

    //**consumo de datos del usuario loggeado */

    const [user, setUser] = useState(0);


    useEffect(() => {
        // console.log("-----------------------------");
        // console.log(localStorage.getItem("userLogged"));
        // console.log(JSON.parse(localStorage.getItem("userLogged")));
    
        if (localStorage.getItem("userLogged")) {
          setUser(JSON.parse(localStorage.getItem("userLogged")));
        }
    
      }, []);
   
    
    const url="http://3.21.53.216:8080/bookings/user/";
    const [bookings, setBookings]= useState([initialBook]);

    //let idUser=4;
    // console.log(idUser);

    let idUser=0;

    if (user !==0) {
    idUser=user.id;
    }
    console.log(idUser);
    //console.log(idUser);

    useEffect(()=> {
 
        const fetchApiBo = async (idUser) => {
            // method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json'
            //     Authorization: Token ${jwt}
            //   }
            const urlId= (url + idUser);
            console.log(urlId);
            const response = await fetch(urlId)
            const responseJSON= await response.json()
            setBookings(responseJSON)
       
        }
        fetchApiBo(idUser)
      
    }, [idUser])
  
    console.log(bookings);


    
    
    return(
        
        <div>
           
            <div>
                <HeaderHome />
            </div>
            <div>
                <ul className={styles.ulPrincipal}>
                {bookings.map((lista)=>
                    <CardMyBookinks
                    key={lista.idBooking} 
                    bookings={lista}
                   />
                    
        
                )
                }
                </ul>
            </div>
           
           
           
            <div>
                <FooterHome />
            </div>

           
        </div>
       
    );
}
