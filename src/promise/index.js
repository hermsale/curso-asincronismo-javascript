// construccion de promesas 
//  estados de una promesa: pendiente/completo/rechazado 

// estructura de una promesa

const promise = new Promise(function(resolve,reject){
    resolve('Todo correcto!');
    reject('todo mal');
})

// then y catch nos permite concatenar solicitudes o mostrar el error 

const cows = 8;

// function con promesa 
const countCows = new Promise(function(resolve,reject){
    if(cows>10){
        resolve(`Tenemos la cantidad necesaria de vacas ${cows}`);
    }else{
        reject('No hay suficientes vacas');
    }
})

// llamado a la function con then and catch
// then nos capturara los resolve
countCows.then((result)=>{
    console.log(result);
}).catch((err)=>{ // y catch los reject 
    console.log(err);
}).finally(()=>{
    console.log('finalizado');
})