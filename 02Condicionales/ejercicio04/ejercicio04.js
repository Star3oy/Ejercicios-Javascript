let num1, num2, dato;

dato = window.prompt("Introduce el primer número ?", "0");
num1 = parseInt(dato);

dato = window.prompt("Introduce el segundo número ?", "0");
num2 = parseInt(dato);

if(num1>num2)
{
    document.getElementById("result").innerHTML = (`El mayor es: ${num1}`);
}else if(num2>num1)
{
    document.getElementById("result").innerHTML = (`El mayor es: ${num2}`);
}else
{
    document.getElementById("result").innerHTML = (`Los números son iguales`);
}