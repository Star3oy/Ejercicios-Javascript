// El usuario introduce 2 números
//Se muestra la resta y multiplicación

let dato, num1, num2;

dato = window.prompt("Introduce el primer número ?", "0");
num1 = parseInt(dato);

dato = window.prompt("Introduce el segundo número ?", "0");
num2 = parseInt(dato);

let res = num1 - num2;
let mul = num1 * num2;

document.getElementById("resta").innerHTML = (`La resta es ${res} `);
document.getElementById("multiplicacion").innerHTML = (`La multiplicación es ${mul} `);