import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1/products/'; // const API2 = 'https://api.escuelajs.co/api/v1/products/211';

function deleteData(urlApi){
    
    // estructura de solicitud POST 
    const response = fetch(urlApi,{
        method:'DELETE', // metodo delete para eliminar
        headers:{
            'Content-Type': 'application/json' // de que tipo es el dato que se pasará 
        }
    });
    return response;
}

// ID A ELIMINAR
const id = 215;

deleteData(`${API}${id}`)
    .then(response => response.json())
    .then(productDelete => console.log(productDelete))
    .catch(err => console.log(err));