let carrera, edad;

carrera = prompt("Carrera?", "0");
edad = prompt("Edad?", "0");
edadNum = parseInt(edad)

if((carrera =="FP") && (edadNum > 18))
{   
document.write(`Bienvenid@`)
}else
{
    document.write(`No tiene acceso`)
}