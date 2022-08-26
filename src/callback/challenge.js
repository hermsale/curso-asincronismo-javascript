// creamos e instanciamos el recurso de XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest');
// poniendo en mayusculas hacemos referencia que es un valor unico que no va a cambiar en ningun momento
const API = 'https://api.escuelajs.co/api/v1';


function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest(); // creamos una instancia de xmlhttprequest

    // usamos su funcion de open y la opcion 'get'
    xhttp.open('GET', urlApi, true);
    // xhttp.onreadystatechange = function (event)
}