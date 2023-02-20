const getCities = async () =>{
    const url="http://3.21.53.216:8080/cities/list";
    const res = await fetch(url);
    const cities = await res.json();

    return cities;
}

export default getCities;