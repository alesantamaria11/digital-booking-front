import styles from "./Categoria.module.css";
import { useEffect,useState } from "react";

export function Categoria({updateSelectedCategory}) {

    const url="http://3.21.53.216:8080/categories/list";
    const [allCategories, setAllCategories]= useState([]);
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON= await response.json()
        setAllCategories(responseJSON)
    }
    useEffect(()=> {
        fetchApi()
    }, [])

    //**id seleccionado */ este es el estado que debo pasar al home
    const [idCategoryFilter, setIdCategoryFilter] = useState(0);


    updateSelectedCategory(idCategoryFilter);
    console.log(idCategoryFilter);

    useEffect(()=>{
        updateCategoryFilter();
    },[]);

    const updateCategoryFilter = (idCateg)=>{
        setIdCategoryFilter(idCateg);
    };
    
    

    return(
        
       <div> 
            <h2 className={styles.categoryTitle}>
            Buscar por tipo de alojamiento
            </h2>
            <div className={styles.cardsContainer} >
            {allCategories.map((category)=>
                <div className={styles.cardsCategorias} onClick={()=>updateCategoryFilter(category.idCategory)} >
                    <div key={category.idCategory}>
                        <img className={styles.imageCategory} src={category.categoryImage} 
                        alt={category.categoryTitle}
                        /> 
                        <h3>{category.categoryTitle}</h3>
                    <p>{`807.105 ${category.categoryTitle}s`}</p>
                </div>
                </div>
            
            
            )
            }
            </div>
        </div>
       
    );
    
}


    //trayendolo desde el service

    // console.log(allCategories);

    // const [allCategories, setAllCategories] = useState();
    // console.log(allCategories);

    // useEffect(()=>{
    //     updateCategories();

    // }, []);

    // const updateCategories = () =>{
    //     getCategories()
    //         .then((newCategories) =>{
    //             setAllCategories(newCategories);
    //         })
    // }



{/* <div>
                    <img src={hostels} alt="hostels" 
                    /> 
                    <h3>Hostels</h3>
                    <p>807.105 hoteles</p>
                </div>
            <div>
                    <img src={departamentos} alt="departamentos" 
                    />  
                    <h3>Departamentos</h3>
                    <p>807.105 hoteles</p>
                </div>  
                <div>
                    <img src={bedAndBreakfast} alt="bed and breakfast" 
                    /> 
                    <h3>Bed and Breakfast</h3>
                    <p>807.105 hoteles</p>
                </div>   */}

               /* {setIdCategoryFilter(category.idCategory) && updateSelectedCategory(idCategoryFilter))}*/