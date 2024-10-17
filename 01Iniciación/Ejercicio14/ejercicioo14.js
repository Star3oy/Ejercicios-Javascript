//El usuario introduce un número 
//La pantalla muestra le mismo número
//Termina cuando el usuario introduce un 7

var num;

var num = 0;
var contador = 0;
while (num != 7)
{
    let dato = prompt(`Introduce número del 1 al 10`, '');
    var num = parseInt(dato);
    document.write(`El numero introducido es ${num} </br>`);
    contador = contador + 1;
}

    document.write(`</br><h2>
    Fin del programa
    Se logró encontrar el número en el intento ${contador} 
    </h2>`);