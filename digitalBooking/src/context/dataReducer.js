const initialState = {
    urlProducts : 'http://3.21.53.216:8080/products',
    city:'',
    category: '',
    isLogged: sessionStorage.getItem("user") ? true : false,
    isAccessDenied: false,
    isErrorBookign: false,      
    userData: JSON.parse(sessionStorage.getItem("dataUser")),
    features: null,
    newProductData: {
        general :{
            Name: '',
            category: '',
            address: '',
            city: '',
            descriptionTitle:'',
            description:''
        },        
        features: [],
        images: [],
        policy: {
            norms: '',
            healthAndSecurity: '',
            cancellationPolicy: ''
        }
    }
}

const types = {
    allProducts : "All products",
    productsCity : "products by city",
    productsCategory: "products by category",   
    searchByDates: "products by range dates", 
    searchByDatesAndCity: "products by range dates and city", 
    categoryContanier: "container for printing styles in category",   
    dateRange: "selected days in calendar",
    accessDenied: "User needs to login for booking",
    logged: "User is logged",
    errorBooking: "Ocurred an error while submit booking",
    userCredentials: "User credentials" ,
    featureProduct: "features to create product",
    addInfoProdcut: "add info for creating product",
    addFeature: "add feature for creating product",
    removeFeature: "remove features for creating products",
    addImages: "add images for creating product",
    removeImages: "remove images for creating products",
    addPolicies: "add policies for creating product"
}

const dataReducer=(state, action,)=>{
  switch (action.type) {
    case types.allProducts:               
            return{
                ...state,
                urlProducts : 'http://3.21.53.216:8080/products',
                cities:'',
                categories:'',
                isLogged: sessionStorage.getItem("user") ? true : false,
            };



    case types.accessDenied:
      return{
          ...state,
          isAccessDenied: action.payload
      }

  case types.logged:
      return{
          ...state,
          isLogged: true
      }
  
      case types.userCredentials:
        return{
            ...state,
            userData: action.payload,
            isLogged: true
        }    

        default:
            return state
    }
}

export {initialState, types};
export default dataReducer;