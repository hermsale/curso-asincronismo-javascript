// creamos e instanciamos el recurso de XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest');

// poniendo en mayusculas hacemos referencia que es un valor unico que no va a cambiar en ningun momento
// referencia al root de la api 
const API = 'https://api.escuelajs.co/api/v1';

// argumentos: recibe url a la cual se hace el llamado, y luego el callback 
function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest(); // creamos una instancia de xmlhttprequest

    // usamos su funcion de open y el tipo 'get', true para habilitarlo
    xhttp.open('GET', urlApi, true);

    // nos permite escuchar los diferentes estados de solicitudes 
    xhttp.onreadystatechange = function (event){ // function que recibe un event 
        
    if(xhttp.readyState === 4){
        // 200 → OK → Indica que todo está correcto.
        if(xhttp.status === 200){
            callback(null, JSON.parse(xhttp.responseText)); // parseamos el JSON a un objeto
        }
    }else{
        const error = new Error('error'+urlApi); // definimos la circunstancia de error 
        return callback(error,null); // devolvemos por return el error y el parametro null, ya que no se esta regresando ningun dato
    }
    }

    xhttp.send(); // Envía la petición.
}

// Estados 
// 1xx → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
// 2xx → Indican que la petición fue recibida, aceptada y procesada correctamente.
// 3xx → Indican que hay que tomar acciones adicionales para completar la solicitud.
// 4xx → Indican errores del lado del cliente que hizo mal una solicitud.
// 5xx → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.
