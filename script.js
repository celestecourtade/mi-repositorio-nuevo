function operar (a , b, callback) {
    return callback (a , b);
}

function resta (x, y) {
    return x - y;
}

let resultado = operar(15, "5" , resta); 

console.log("el resultado es: " , resultado )


//aca profe te digo lo que hice: 
//no se si es necesario que explique como funciona esta funcion pero aca lo hago,


//en la segunda funcion si bien esta el x  y el y , no esta retornando ningun valor, osea no me devuelve el valor de a ,b



// 1) en la primer funcion tenemos function y le ponemos el nombre operar y despues le asignnamos los palametros a, b 
//y despues retornarmos el valor callback y le pasamos las variables de nuevo (a , b ), aca van a estar los numeros de la resta

//en la segunda funcion tenemos x, y , vemos que retorna x - y
// adentro de esas letras x - y  estan los numeros que se hayan ingresado antes en a y b ,
// entonces con el return me va a calcular la resta , sea el numero que tenga x - y adentro

//despues en el resultado, tenemos let y la variable resultado , aca vamos a guardar lo que de esa resta
//para eso definimos la variable ponemos let resultado = y lllamamos a la funcion operar (y agregamos los numeros de la resta y la variable resta que ahi se van a guardar lo que dio x -y )

//debemos poner console.log ("el resultado es: ") esto va a aparecer literal en la consola , y ponemos la variable resultado
//por ultimo mostramos en la consola , podemos ver el resultado abriendo el navegador y vemos el resuultado en vivo

//espero se haya entendido mi explicacion

