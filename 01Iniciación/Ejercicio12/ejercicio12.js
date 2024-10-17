var contador;
contador = 1;

while (contador<5)
{
    let dato = prompt(`Introduce número del 1 al 10`, '');
    let num = parseInt(dato);

    document.write(`El numero introducido es ${num} </br>`);
    document.write(`El contador es ${contador} </br>`);

    contador = contador +1;
}

    document.write(`</br><h2>
                    Fin del programa
                    contrador ya NO es menor que 5 
                    </h2>`);

    document.write(`Ultimo numero introducido es ${num}`);