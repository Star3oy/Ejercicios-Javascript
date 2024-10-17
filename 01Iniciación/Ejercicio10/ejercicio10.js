//El usuario ingresa dos números
//El ordenardor muestra la resta de los dos números

let dato, num, num2;

dato = window.prompt("Introduce el primer número ?", "0");
num = parseInt(dato);

dato = window.prompt("Introduce el segundo número ?", "0");
num2 = parseInt(dato);

let resultado = num - num2;

document.getElementById("salida").innerHTML = (`El resultado es ${resultado} `);