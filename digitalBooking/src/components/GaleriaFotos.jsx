import styles from "./GaleriaFotos.module.css";
import { GaleriaModalFotos } from "./GaleriaModalFotos";
import { useModal } from "../hooks/useModal";
import lista1 from "../listado3.json";
import { Carousel } from 'react-carousel-minimal';
import { GaleriaMobile } from "./GaleriaMobile";
import "./Carrousel.css";
//import { map } from "rsuite/esm/utils/ReactChildren";

export function GaleriaFotos({listaDos}){
    
    const[isOpenModal1,openModal1,closeModal1]=useModal(false);

    console.log(listaDos);


    let immage1;
    let immage2;
    let immage3;
    let immage4;
    let immage5;
    let immage6;
    let immage7;
    let immage8;
    let immage9;
    let immage10;
    let immage11;
    let immage12;
    let immage13;
    let immage14;
    let immage15;
    let id1;
    let id2;
    let id3;
    let id4;
    let id5;
    let id6;
    let id7;
    let id8;
    let id9;
    let id10;
    let id11;
    let id12;
    let id13;
    let id14;
    let id15;
    for (let index = 0; index <listaDos.length; index++) {
            // immage1=listaDos[0].imageUrl ? listaDos[0].imageUrl :listaDos[0].imageUrl="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
            // immage2=listaDos[1].imageUrl ? listaDos[1].imageUrl :listaDos[1].imageUrl="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
            // immage3=listaDos[2].imageUrl ? listaDos[2].imageUrl :listaDos[2].imageUrl="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
            // immage4=listaDos[3].imageUrl ? listaDos[3].imageUrl :listaDos[3].imageUrl="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
            // immage5=listaDos[4].imageUrl ? listaDos[4].imageUrl :listaDos[4].imageUrl="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
            // immage6=listaDos[5].imageUrl ? listaDos[5].imageUrl :listaDos[5].imageUrl="https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png";
            immage1=listaDos[0]?.imageUrl;
            immage2=listaDos[1]?.imageUrl;
            immage3=listaDos[2]?.imageUrl;
            immage4=listaDos[3]?.imageUrl;
            immage5=listaDos[4]?.imageUrl;
            immage6=listaDos[5]?.imageUrl; 
            immage7=listaDos[6]?.imageUrl ;
            immage8=listaDos[7]?.imageUrl ;
            immage9=listaDos[8]?.imageUrl ;
            immage10=listaDos[9]?.imageUrl ;
            immage11=listaDos[10]?.imageUrl ;
            immage12=listaDos[11]?.imageUrl ;
            immage13=listaDos[12]?.imageUrl ;
            immage14=listaDos[13]?.imageUrl ;
            immage15=listaDos[14]?.imageUrl ;
            //id1=listaDos[0].idImage ;
            // id2=listaDos[1].idImage ;
            // id3=listaDos[2].idImage ;
            // id4=listaDos[3].idImage ;
            // id5=listaDos[4].idImage ;
            // id6=listaDos[5].idImage ;
            // id7=listaDos[6].idImage ;
            // id8=listaDos[7].idImage ;
            // id9=listaDos[8].idImage ;
            // id10=listaDos[9].idImage ;
            // id11=listaDos[10].idImage ;
            // id12=listaDos[11].idImage ;
            // id13=listaDos[12].idImage ;
            // id14=listaDos[13].idImage ;
            // id15=listaDos[14].idImage ;  
    }
    
    // console.log(immage1);
    // console.log(immage2);
    // console.log(immage3);
    // console.log(immage4);
    // console.log(immage5);
    // console.log(id13);

    const dataFinal=[]

    dataFinal.push({image:immage1},
        {image:immage2},
        {image:immage3},
        {image:immage4},
        {image:immage5},
        {image:immage6},
        {image:immage7},
        {image:immage8},
        {image:immage9},
        {image:immage10},
        {image:immage11},
        {image:immage12},
        {image:immage13},
        {image:immage14},
        {image:immage15});
    console.log(dataFinal);
 
  
   
   //*** codigo libreria */
    //const data = lista1;
    const data = dataFinal;
    console.log(data);
   

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }


   
    return(
        <div className={styles.galeriaGeneral}>

               {/* **Mobile Galery*** */}
            <div className={styles.locationGaleria2}> 
                 <GaleriaMobile imagenes={dataFinal}/> 
                 
            </div>

            {/* ***Desktop Galery*** */}

                  <li className={styles.locationGaleria}>
                
                   
                    <div className={styles.box1}>
                        <img src={immage1 ? immage1 : "https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png"} 
                        alt={1} 
                        className={styles.locationImg}
                        />
                    </div>
                

                    <div className={styles.box2}>
                        <div>
                        <img src={immage2 ? immage2 : "https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png"} 
                        alt={2} 
                        className={styles.locationImg}
                        />
                        </div>
                
                        <div>
                        <img src={immage3 ? immage3 : "https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png"} 
                        alt={3}
                        className={styles.locationImg}
                        />
                        </div>
                
                        <div>
                        <img src={immage4 ? immage4 : "https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png"} 
                        alt={4}
                        className={styles.locationImg}
                        />
                        </div>
                        <div>
                        <img src={immage5 ? immage5 : "https://grupo2-s3-images-c6.s3.us-east-2.amazonaws.com/ProductoSinImagen.png"} 
                        alt={5}  
                        className={styles.locationImg}
                        />
                        </div>
                    </div>


                
               {/* ***ventana modal */}
                <div className={styles.windowModal}>
                
                    <button type="button" onClick={openModal1}>ver más</button>
                    
                        {/* codigo libreria */}

                                    
                         <GaleriaModalFotos isOpen={isOpenModal1} closeModal={closeModal1}> 
                        
                        <div className="App">
                            <div style={{ textAlign: "center",
                            fontSize:"5px",
                            fontWeight:"100"
                         }}>
                               
                                <div style={{
                                padding: "0 20px"
                                
                                }}>
                                <Carousel 
                                    data={data}
                                    time={3000}
                                    width="638"
                                    height="310px"
                                    captionStyle={captionStyle}
                                    radius="10px"
                                    slideNumber ={true}
                                    slideNumberStyle={slideNumberStyle}
                                    captionPosition="bottom"
                                    automatic={true}
                                    dots={true}
                                    pauseIconColor="white"
                                    pauseIconSize="40px"
                                    slideBackgroundColor="darkgrey"
                                    slideImageFit="cover"
                                    thumbnails={true}
                                    thumbnailWidth="100px"
                                    style={{
                                    textAlign: "center",
                                    maxWidth: "100vh",
                                    maxHeight: "300px",
                                    margin: "40px auto",
                                    }}
                                />
                                </div>
                            </div>
                        </div>
                        

                           
          
                        </GaleriaModalFotos> 

                </div>
                
               
                  {/* ***ventana modal */}
            
            </li>


    

            </div>


           
    );
   
}


