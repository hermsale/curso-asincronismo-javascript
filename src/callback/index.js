function sum(num1,num2){
    return num1+num2;
}

// le pasamos dos argumentos y un tercero que será una funcion 
function calc(num1,num2,callback){

return callback(num1,num2);
}

// la funcion calc nos pide que pasemos por argumento 2 valores y una funcion 
// le pasamos la funcion sum - NO ES NECESARIO agregar los parentesis de la funcion sum(). Si hacemos esto, estariamos invocando inmediatamente.Tambien no es necesario pasarle a sum los argumentos que va a requerir. Ya que en la llamada de calc, tenemos callback que esta pasando los argumentos. 

console.log(calc(2,5,sum));


//////////////////////////////////////// set time out ///////////////////////////

// setTimeout es una funcion nativa de JS 
// setTimeOut para funcionar precisa de una funcion, del codigo a ejecutar y de un tiempo determinado de ejecucion 
// a continuacion ejecutamos una funcion anonima, luego le indicamos en cuanto tiempo se va a ejecutar, lo que este dentro de la funcion.
setTimeout(function (){
    console.log('Hola JavaScript');
},2000)
///////////////////////////////////////////////////////////////////////////

// setTimeOut con funcion, y pasaje de argumentos 
function saludo(name){
    console.log(`Hola! ${name}`);
}
// le asignamos que va a trabajar con la funcion saludo, se ejecutara despues de 2 segundos, y le pasamos los ARGUMENTOS
setTimeout(saludo,2000,'Alejandro');