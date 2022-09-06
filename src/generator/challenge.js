import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

// declaramos una funcion async y generator - funcion declarativa (no aplica hoisting)
async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

// funcion expresiva - aplica hoisting  
const anotherfunction = async function* (urlApi){
    try{
        const products = await fetchData(`${urlApi}/products`); // hacemos una solicitud a la api, y guardamos en products la data (todos los products)
        

        const product = await fetchData(`${urlApi}/products/${products[0].id}`); // accedemos al primer producto del arreglo y guardamos su id
        
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
       
        // en este orden se mostrará en los next 
        yield console.log('todos los productos ', products[107]);
        yield console.log('titulo de un producto ',product.title);
        yield console.log('categoria de un producto ',category.name);
    }
    catch(error){
        console.error(error);
    }
}

// llamamos a la api y guardamos en genApi todo lo recibido 
const genApi = anotherfunction(API);

// de esta forma podemos controlar en que momentos ir mostrando (O NO) lo que recibimos de la API 
genApi.next();
genApi.next();
genApi.next();

