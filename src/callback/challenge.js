// creamos e instanciamos el recurso de XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// poniendo en mayusculas hacemos referencia que es un valor unico que no va a cambiar en ningun momento
// referencia al root de la api 
const API = 'https://api.escuelajs.co/api/v1';

// fetchData argumentos: recibe url a la cual se hace el llamado, y luego el callback (la respuesta)
function fetchData(urlApi, callback){
    console.log('primero');
    let xhttp = new XMLHttpRequest(); // creamos una instancia de xmlhttprequest

    // usamos su funcion de open y el tipo 'get', true para habilitarlo
    xhttp.open('GET', urlApi, true);

    // nos permite escuchar los diferentes estados de solicitudes 
    xhttp.onreadystatechange = function (event){ // function que recibe un event 

        // secuencia de estados 
// 0 → Se ha inicializado. 1 → Loading (cargando). 2 → Se ha cargado. 3 → Procesamiento si existe alguna descarga. 4 → Completado.

        // Carga completa -> 4
        if(xhttp.readyState === 4){
            // 200 → OK → Indica que todo está correcto.
            if(xhttp.status === 200){
                console.log('muestra la respuesta ');
                callback(null, JSON.parse(xhttp.responseText)); // parseamos el JSON a un objeto
            }else{
                const error = new Error('error api'+urlApi); // definimos la circunstancia de error 
                return callback(error,null); // devolvemos por return el error y el parametro null, ya que no se esta regresando ningun dato
            }
        }
    }

    xhttp.send(); // Envía la petición.
} 

// Codigos estado servidor (200, 404, etc) 
// 1xx → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
// 2xx → Indican que la petición fue recibida, aceptada y procesada correctamente.
// 3xx → Indican que hay que tomar acciones adicionales para completar la solicitud.
// 4xx → Indican errores del lado del cliente que hizo mal una solicitud.
// 5xx → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.


///////// LLAMADO DE FUNCION /////////////

// url: /products /categories /users  

// pasamos la url a donde queremos hacer la consulta, y luego una funcion anonima con error y data
fetchData(`${API}/products`, function(error1,data1){
    console.log('segundo ');
    if(error1) return console.error('error1 '+error1); 
        fetchData(`${API}/products/${data1[0].id}`, function(error2,data2){
                if(error2) return console.error('error2 '+error2);
                fetchData(`${API}/categories/${data2?.category?.id}`,function (error3,data3){
                    if(error3) return console.error('error3 '+error3);
                    console.log('data1: ')
                    console.log(data1[0]);
                    console.log('data2: ')
                    console.log(data2.title);
                    console.log('data3: ')
                    console.log(data3.name);
                });
        });
});
