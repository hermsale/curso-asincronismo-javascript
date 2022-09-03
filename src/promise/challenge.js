import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    console.log('entra la consulta');
    return fetch(urlApi);
}

// fetchData(`${API}/products`)
//     .then(response => response.json()) // IMPORTANTE: primero transformamos la informacion que llega, a un objeto de tipo JSON 
//     .then(products => { // una vez transformado el objeto a JSON. podemos anidar multiples then's 
//         console.log(products); // mostramos los productos 
//     })
//     .then(()=>{
//         console.log('podemos agregar los then que deseemos');
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

fetchData(`${API}/products`)
    .then(res => res.json())
    .then(products => {
        console.log('devuelve products');
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(res => res.json())
    .then(product =>{
        console.log(`devuelve ${product}`);
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then(res => res.json())
    .then(category =>{
        console.log(category.name);
    })
    .catch(err =>{
        console.log(err);
    })
    .finally(()=>{
        console.log('Finalizo');
    })