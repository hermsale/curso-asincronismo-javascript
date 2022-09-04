import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1/products/'; // const API2 = 'https://api.escuelajs.co/api/v1/products/211';

function putData(urlApi,data){
    
    // estructura de solicitud POST 
    const response = fetch(urlApi,{
        method:'PUT', // metodo PUT para agregar 
        mode: 'cors', // permisos que va a tener
        credentials: 'same-origin', // por defecto será same-origin, aunque no es necesario 
        headers:{
            'Content-Type': 'application/json' // de que tipo es el dato que se pasará 
        },
        body: JSON.stringify(data) // transformamos la informacion que recibimos, con el metodo stringify: la recibimos como tipo OBJETO y lo transformamos a texto. 

    });
    return response;
}

// información a actualizar
const data = {
    "title": "Herrnuke - METAL",
    "price": 649,
    "description": "Thrash Metal Band, EP Herrnuke"
}

const id = 210;

putData(`${API}${id}`,data)
    .then(response => response.json())
    .then(productUpdate => console.log(productUpdate))
    .catch(err => console.log(err));