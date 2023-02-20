const getProducts = async () => {
    const url="http://3.21.53.216:8080/products/list";
    const response = await fetch(url)
    const products= await response.json();

    return products;

}       
export default getProducts;

    //     let url;
    
    //     if(!idCity || idCity === 0){
    //         url="http://3.21.53.216:8080/products/list";
    //    }else{
    //         url="http://3.21.53.216:8080/products/city" + idCity;
    
    //    }
         
       
    


// const getProductByCity = async (idCity) =>{

//     let url;

//     if(!idCity || idCity === 0){
//          url="http://3.21.53.216:8080/products/list";
//     }else{
//          url="http://3.21.53.216:8080/products/city" + idCity;

//     }
    
//     const res = await fetch(url);
//     const [data] = await res.json();

//     const {category: [category], city:[city] } =data;

//     //console.log(data);
//     const productsByCity={
       
//             idProduct: "",
//             productTitle: "",
//             productDescription: "",
//             category,
//             city
//     }
//         console.log(productsByCity);

//     return productsByCity;
// }

// export default getProductByCity;

