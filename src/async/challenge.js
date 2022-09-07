import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

<<<<<<< HEAD
// declaramos una funcion anonima async que en sus parametros tenga la url 
const anotherfunction = async (urlApi) => {
    // en try sucede lo que queremos que forma parte de la logia de nuestra app - es lo que llega en el resolve 
=======
 
// declaramos una funcion anonima async que en sus parametros tenga la url
const anotherfunction = async (urlApi) => {
    // en try sucede lo que queremos que forma parte de la logia de nuestra app - es lo que llega en el resolve
>>>>>>> d62b1a6378f94547e51fb451627559372cc4946e
    try{
        const products = await fetchData(`${urlApi}/products`); // hacemos una solicitud a la api, y guardamos en products la data (todos los products)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`); // accedemos al primer producto del arreglo y guardamos su id
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`) // utilizamos lo llegado en el segundo llamado, para acceder a category y su id
<<<<<<< HEAD

=======
 
>>>>>>> d62b1a6378f94547e51fb451627559372cc4946e
        console.log('todos los productos ', products);
        console.log('titulo de un producto ',product.title);
        console.log('categoria de un producto ',category.name);
    }
<<<<<<< HEAD
    // entra lo que llegue en el reject 
    catch (error){
        console.error(error); // en caso que falle algo, caera en este recurso 
    }
}

anotherfunction(API);
=======
    // entra lo que llegue en el reject
    catch (error){
        console.error(error); // en caso que falle algo, caera en este recurso
    }
}
 
anotherfunction(API);
>>>>>>> d62b1a6378f94547e51fb451627559372cc4946e
