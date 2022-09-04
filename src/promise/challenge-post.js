import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1/';

// estructura de POST, argumentos (url, y lo que vamos a enviar )
function postData(urlApi,data){
    
    // estructura de solicitud POST 
    const response = fetch(urlApi,{
        method:'POST', // metodo post para agregar 
        mode: 'cors', // permisos que va a tener
        credentials: 'same-origin', // por defecto será same-origin, aunque no es necesario 
        headers:{
            'Content-Type': 'application/json' // de que tipo es el dato que se pasará 
        },
        body: JSON.stringify(data) // transformamos la informacion que recibimos, con el metodo stringify: la recibimos como tipo OBJETO y lo transformamos a texto. 

    });
    return response;
}
// a donde hay que apuntar --> https://api.escuelajs.co/api/v1/products/

// Producto a agregar manualmente 
const data = {
        "title": "New Product Herrnuke ultimo",
        "price": 666,
        "description": "Thrash Metal Band",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]     
}

// usamos la funtion, hacemos referencia a la raiz products, y enviamos la data 
postData(`${API}products`,data)
    .then(response => response.json())
    .then(productPost => console.log(productPost))
    .catch(err => console.log(err));

    // resultado
    // {
    //     title: 'New Product Herrnuke',
    //     price: 666,
    //     description: 'Thrash Metal Band',
    //     images: [ 'https://placeimg.com/640/480/any' ],
    //     category: {
    //       id: 1,
    //       name: 'Clothes',
    //       keyLoremSpace: 'fashion',
    //       image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=9336'
    //     },
    //     id: 210 
    //   }

    // se nos agrego el id unico 210, que se puede corroborar en la API
    // https://api.escuelajs.co/api/v1/products/210

    
const API2 = 'https://api.escuelajs.co/api/v1/products/210'; // const API2 = 'https://api.escuelajs.co/api/v1/products/211';

function putData(urlApi,data){
    
    // estructura de solicitud POST 
    const response = fetch(urlApi,{
        method:'PUT', // metodo post para agregar 
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
const data2 = {
    "title": "Herrnuke",
    "price": 649,
    "description": "Thrash Metal Band, EP Herrnuke"
}

const id = 210;

putData(API2,data2)
    .then(response => response.json())
    .then(productUpdate => console.log(productUpdate))
    .catch(err => console.log(err));