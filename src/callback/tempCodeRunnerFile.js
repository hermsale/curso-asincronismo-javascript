
function saludo(name){
    console.log(`Hola! ${name}`);
}
// le asignamos que va a trabajar con la funcion saludo, se ejecutara despues de 2 segundos, y le pasamos los ARGUMENTOS
setTimeout(saludo,2000,'Alejandro');