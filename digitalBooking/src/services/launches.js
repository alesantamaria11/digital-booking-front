

// const API_URL = "http://3.21.53.216:8080";

// export async function getLaunchByIdNumber(idNumber){
//     try{
//         const response= await fetch(`${API_URL}/products/get/${idNumber}`);
//         const data = await response.json();
//         return data;
//         } catch(error){
//              console.error(error);
//     }
    
// }

//export async function getLaunch(){
//    try{
 //       const response = await fetch(url)
//        const responseJSON= await response.json()
//        setOneProduct(responseJSON)
//        } catch(error){
//              console.error(error);
 //   }
//}



// const url="http://3.21.53.216:8080/products/list/{id}";
//     const [oneProduct, setOneProduct]= useState([]);
//     const fetchApi = async () => {
//         const response = await fetch(url)
//         const responseJSON= await response.json()
//         setOneProduct(responseJSON)
//     }
//     useEffect(()=> {
//         fetchApi()
//     }, [])