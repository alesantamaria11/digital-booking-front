import React from 'react';
import styles from './Administration.module.css'
import { Link } from 'react-router-dom';
import { HeaderHome } from './HeaderHome';
import { FooterHome } from './FooterHome';
import atomoBack from "../assets/img/atomoBack.png";
import { useState, useContext } from 'react';
import iconPlusSquare from '../assets/img/iconPlusSquare.png'
import { DataContext } from '../context/DataProvider';
import { useEffect} from 'react';


const initialCities={
 
    

}
const initialCategories={
 
  idCategory: "",
  categoryTitle: "",
  categoryDescription: "",
  categoryImage: ""

}

const charInit={
  "idCharacteristic": "",
  "characteristicName": "",
  "characteristicImage": "",
  "characteristicDescription": ""
}

export const Administration = () => {

  //**** consumo de api para select ciudades */
  
    const url1="http://3.21.53.216:8080/cities/list";
    
    const [allCities, setAllCities] = useState([initialCities]);
     
     useEffect(()=> {
     const fetchApiCities = async () => {
        console.log(url1);
         const response = await fetch(url1)
         const responseJSON= await response.json()
         setAllCities(responseJSON)
     }
     fetchApiCities()
     }, [])

     console.log(allCities);


//******** */

 //**** consumo de api para select categorias */

    
    const url2="http://3.21.53.216:8080/categories/list";
    const [allCategories, setAllCategories] = useState([initialCategories]);
     
     useEffect(()=> {
     const fetchApiCategories = async () => {
        console.log(url2);
         const response = await fetch(url2)
         const responseJSON= await response.json()
         setAllCategories(responseJSON)
         console.log(info.category);
     }
     fetchApiCategories()
     }, [])

     console.log(allCategories);

  //captura de datos para guardar producto   

  const [ state, dispatch ] = useContext(DataContext)

  const [ info, setInfo ] = useState(
    {
      propertyName: "",
      category: "",
      address: "",
      city: "",
      description: "",
      descriptionTitle : "",
      descriptionRules : '',
      descriptionHealth : '',
      descriptionCancel : '',
      characteristic: ""
      
    }
  )

  const handleChange = (e) =>{
    
    
    setInfo(
      {...info,
      [e.target.name]: e.target.value
    });
    
  }

  //consumir endpoint para mostrar caracteristicas

  const urlCharacter="http://3.21.53.216:8080/characteristics/list";
    
    const [character, setCharacter] = useState([charInit]);
     
     useEffect(()=> {
     const fetchApiCharacter= async () => {
        console.log(urlCharacter);
         const response = await fetch(urlCharacter)
         const responseJSON= await response.json()
         setCharacter(responseJSON)
     }
     fetchApiCharacter()
     }, [])

     console.log(character);

  //***capturar caracteristica */

  
  const [productFeatures, setProductFeatures] = useState([])

const handleOnChange=(e)=>{
  
  var isChecked = e.target.checked;
  var item = e.target.value;

  if (isChecked) {
      let productFeaturesClone = [...productFeatures]
      productFeaturesClone.push(item);
      setProductFeatures(productFeaturesClone);
  }
  if (!isChecked) {
      let productFeaturesClone = [...productFeatures]
      let newFeatures = productFeaturesClone.filter(feature => feature !== item);
      setProductFeatures(newFeatures);
  }

} 


console.log(productFeatures);



//***para capturar solo una imagen */

 const[productImage, setProductImage]=useState(
  [{
  imageTitle: "",
  imageUrl: "",
  // product: {
  //       idProduct:"" 
  //   }
}]
)

const formData = new FormData();
        formData.append('file', productImage);

const handleImage = (e) =>{
    
    
     setProductImage(
      {...productImage,
       [e.target.name]: e.target.value
     });
    
   }

//segunda imagen

 const[productImage1, setProductImage1]=useState(
  [{
  imageTitle: "",
  imageUrl: "",
  // product: {
  //       idProduct:"" 
  //   }
}]
)

const formData1 = new FormData();
        formData1.append('file', productImage1);

const handleImage1 = (e) =>{
    
    
     setProductImage1(
      {...productImage1,
       [e.target.name]: e.target.value
     });
    
   }

//imagen3

   const[productImage2, setProductImage2]=useState(
    [{
    imageTitle: "",
    imageUrl: "",
    // product: {
    //       idProduct:"" 
    //   }
  }]
  )
 
  const formData2 = new FormData();
          formData2.append('file', productImage2);
  
  const handleImage2 = (e) =>{
      
      
       setProductImage2(
        {...productImage2,
         [e.target.name]: e.target.value
       });
      
     }

     //imagen 4
   const[productImage3, setProductImage3]=useState(
    [{
    imageTitle: "",
    imageUrl: "",
    // product: {
    //       idProduct:"" 
    //   }
  }]
  )
 
  const formData3 = new FormData();
          formData3.append('file', productImage3);
  
  const handleImage3 = (e) =>{
      
      
       setProductImage3(
        {...productImage3,
         [e.target.name]: e.target.value
       });
      
     }

     //imagen 5
   const[productImage4, setProductImage4]=useState(
    [{
    imageTitle: "",
    imageUrl: "",
    // product: {
    //       idProduct:"" 
    //   }
  }]
  )
 
  const formData4 = new FormData();
          formData4.append('file', productImage4);
  
  const handleImage4 = (e) =>{
      
      
       setProductImage4(
        {...productImage4,
         [e.target.name]: e.target.value
       });
      
     }

   
  
// consumo API para guardar producto OJO 
const urlSave="http://3.21.53.216:8080/products/save";
//const urlSave2="http://3.21.53.216:8080/product-characteristics/save"
const urlSave3="http://3.21.53.216:8080/images/save"

   

//funcion para guardar cuando se hace click en el boton de guardar producto
 //respuesta del repsonse 

 const [responseProduct, setResponseProduct]= useState(0);

const handleBooking = async()=>{
    //e.preventDefault();
  

    
    //guardar producto  
    const saveProduct = await fetch(urlSave, {
        method: 'POST', 
        body: JSON.stringify({
              productTitle: info.propertyName,
              productDescription: info.description,
              category:{
                idCategory: info.category,
              },
              city:{
                idCity: info.city 
              }, 
              characteristics:  
                productFeatures?.map((index)=>{
                  
                  return{
                    idCharacteristic:parseInt(index)
                  }
                })
           
              
        }), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
         
        console.log('Success:', response)
        setResponseProduct(response)
        return response;
      })
      .catch(error => console.error('Error:', error))
          
      console.log("save product",saveProduct);
      
      
//guardar caracteristicas

      if(saveProduct?.idProduct){

            //guardar imagenes
         //imagen      
        fetch(urlSave3, {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageTitle: productImage.imageTitle,
            imageUrl: productImage.imageUrl,
            product: {
                  idProduct: saveProduct?.idProduct
                  }
                }),
            }).then(response => response.json())
            .then(data =>{ 
              console.log('Success:', data)
            })

            //imagen1      
        fetch(urlSave3, {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageTitle: productImage1.imageTitle,
            imageUrl: productImage1.imageUrl,
            product: {
                  idProduct: saveProduct?.idProduct
                  }
                }),
            }).then(response => response.json())
            .then(data =>{ 
              console.log('Success:', data)
            })

            //imagen2      
        fetch(urlSave3, {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageTitle: productImage2.imageTitle,
            imageUrl: productImage2.imageUrl,
            product: {
                  idProduct: saveProduct?.idProduct
                  }
                }),
            }).then(response => response.json())
            .then(data =>{ 
              console.log('Success:', data)
            })

            //imagen3      
        fetch(urlSave3, {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageTitle: productImage3.imageTitle,
            imageUrl: productImage3.imageUrl,
            product: {
                  idProduct: saveProduct?.idProduct
                  }
                }),
            }).then(response => response.json())
            .then(data =>{ 
              console.log('Success:', data)
            })

            //imagen4      
        fetch(urlSave3, {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageTitle: productImage4.imageTitle,
            imageUrl: productImage4.imageUrl,
            product: {
                  idProduct: saveProduct?.idProduct
                  }
                }),
            }).then(response => response.json())
            .then(data =>{ 
              console.log('Success:', data)
            })
      



      }
     
    }

  
    
    

console.log(info.category);
console.log(info.propertyName);
console.log(info.city);
console.log(info.description);
//console.log(info.idCity);
console.log(info.characteristic);
//******** */


  return (
    <div className={styles.container}>

      <HeaderHome />

      <div className={styles.containerHeaderBlock}>
        <h2>Administración</h2>
        <Link to='/' >
          <img src={atomoBack} alt="Volver a Home" />
        </Link>
      </div>

      <h2 className={styles.title}>Crear Propiedad</h2>
      
      <div className={styles.containerCard}>
        <div className={styles.containerMajor}>
            <form>
              <div className={styles.formMajor}>
                <div className={styles.boxInput}>
                  <label>Nombre de la propiedad</label>
                  <input
                    type='text'
                    name='propertyName'
                    placeholder=''
                    value={info.propertyName}
                    onChange={handleChange}
                    required
                    autoComplete='off'
                  />
                </div>

                <div className={styles.boxInput}>
                  <label>Categoría</label>
                  <select name='category'
                    placeholder=''
                    value={info.idCategory}
                    onChange={handleChange}
                    required>
                  <option value="">Categorias</option>
                   {
                       allCategories.map((category)=>(
                           <option value={category.idCategory} key={category.idCategory}>{category.categoryTitle}</option>
                       ))
                       }
                  
                    
                    </select> 
                </div>

                <div className={styles.boxInput}>
                  <label>Dirección</label>
                  <input
                    type='text'
                    name='address'
                    placeholder=''
                    value={info.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                 <div className={styles.boxInput}>
                  <label>Ciudad</label>
                  <select name='city'
                    // type='text'
                    placeholder=''
                    value={info.idCity}
                    onChange={handleChange}
                    required>
                   <option value=''>Ciudades</option>
                   {
                       allCities.map((ciudad)=>(
                           <option value={ciudad.idCity} key={ciudad.idCity}>{ciudad.city}</option>
                       ))
                       }
                   
                    </select>
                </div> 

                <div className={styles.boxInput}>
                  <label>Descripción</label>
                  <textarea
                    type='text'
                    name='description'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={info.description}
                    onChange={handleChange}
                    required
                  />
                </div>


                <h4 className={styles.subtitle}>Agregar caracteristicas</h4>


                  <div className={styles.containerFeature}>
                   
                     {character.map((lista) =>
                     <>
                      <input
                        type='checkbox'
                        name='characteristic'
                        placeholder=''
                        value={lista.idCharacteristic}
                        onChange={handleOnChange}
                        
                        required
                        />
                        
                        {lista.characteristicName}
                        </>
                      )}
                    </div> 

                  <h4 className={styles.subtitle}>Agregar imágenes</h4>
                  <div className={styles.boxInput}>
                  <label>Agregar titulo de la imagen</label>
                  <textarea
                    type='text'
                    name='imageTitle'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage.imageTitle}
                    onChange={handleImage}
                    required
                  />

                  <textarea
                    type='text'
                    name='imageTitle'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage1?.imageTitle}
                    onChange={handleImage1}
                    required
                  />

                  <textarea
                    type='text'
                    name='imageTitle'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage2?.imageTitle}
                    onChange={handleImage2}
                    required
                  />

                  <textarea
                    type='text'
                    name='imageTitle'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage3?.imageTitle}
                    onChange={handleImage3}
                    required
                  />

                  <textarea
                    type='text'
                    name='imageTitle'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage4?.imageTitle}
                    onChange={handleImage4}
                    required
                  />
                </div>

                <div className={styles.boxInput}>
                  <label>Agregar URL de la imagen</label>
                  <textarea
                    type='text'
                    name='imageUrl'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage.imageUrl}
                    onChange={handleImage}
                    required
                  />

                  <textarea
                    type='text'
                    name='imageUrl'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage1?.imageUrl}
                    onChange={handleImage1}
                    required
                  />

                  <textarea
                    type='text'
                    name='imageUrl'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage2?.imageUrl}
                    onChange={handleImage2}
                    required
                  />

                  <textarea
                    type='text'
                    name='imageUrl'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage3?.imageUrl}
                    onChange={handleImage3}
                    required
                  />

                  <textarea
                    type='text'
                    name='imageUrl'
                    placeholder=''
                    cols='200'
                    rows='15'
                    value={productImage4?.imageUrl}
                    onChange={handleImage4}
                    required
                  />

                  
                </div>
                
                    
                 
                <h4 className={styles.subtitle}>Políticas del producto</h4>

                <h5 className={styles.subSubtitle}>Normas de la casa</h5>
                  
                  <div className={styles.containerPolicy}>
                      <label>Descripción</label>
                      <textarea
                        type='text'
                        name='descriptionRules'
                        placeholder='Escriba aquí'
                        cols='200'
                        rows='5'
                        value={info.descriptionRules}
                        onChange={handleChange}
                        required
                        />
                  </div>

                  <h5 className={styles.subSubtitle}>Salud y seguridad</h5>
                  
                  <div className={styles.containerPolicy}>
                      <label>Descripción</label>
                      <textarea
                        type='text'
                        name='descriptionHealth'
                        placeholder='Escriba aquí'
                        cols='200'
                        rows='5'
                        value={info.descriptionHealth}
                        onChange={handleChange}
                        required
                        />
                  </div>

                  <h5 className={styles.subSubtitle}>Política de cancelación</h5>
                  
                  <div className={styles.containerPolicy}>
                      <label>Descripción</label>
                      <textarea
                        type='text'
                        name='descriptionCancel'
                        placeholder='Escriba aquí'
                        cols='200'
                        rows='5'
                        value={info.descriptionCancel}
                        onChange={handleChange}
                        required
                        />
                  </div>


                  <Link to='/producto-exitoso'> 
                  <button type='submit' onClick={handleBooking}>Crear</button>
                  </Link>



              </div>
            </form>

        </div>
      </div>
      <FooterHome />
    </div>
  );
}


