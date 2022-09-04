const funcionAsync = () =>{
    return new Promise((resolve,reject)=>{
        // if ternario 
        (true)
        ? setTimeout(() => resolve('Async!'),2000)
        : reject (new Error ('Error!'));
    });
}

const anotherFunction = async () => {
    const something = await funcionAsync(); // citamos la funcion
    console.log(something); // mostramos su resultado
    console.log('Hello!'); // esto va a esperar al await antes de mostrarse 
}

////// async await no bloquean la aplicacion. por eso el before y after se muestran seguidos. 
console.log('Before!');
anotherFunction();
console.log('After');