// creamos una funcion, que nos permita controlar la iteracion, pausar o retomar lo que queramos, en cualquier momento 

// la estructrura de los generators lleva * 

function* gen(){
    // dentro del generador tenemos la palabra reservada yield 
    yield 1;
    yield 2;
    yield 3;
}

const g = gen(); // guardamos en g, lo que hay en gen

// esta logica de gen, nos va a habilitar en g, la palabra reservada next 

console.log(g.next().value); // obtendremos el primer valor 
console.log(g.next().value); // obtendremos el segundo valor
console.log(g.next().value); // obtendremos el tercer valor

// de esta forma se muestra que podemos controlar cuando queremos acceder a cada uno de los elementos que estamos accediendo 

///////////

function* iterate(array){
    for(let value of array){
        yield value; // muestra el contenido de value 
    }
}

const it = iterate(['oscar','omar','alejandro','juan']);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // devolverá un valor TRUE cuando no haya mas cosas que mostrar en el array 
console.log(it.next());
console.log(it.next());