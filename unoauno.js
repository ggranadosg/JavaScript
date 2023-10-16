// script.js
document.addEventListener("DOMContentLoaded", function() {

/*21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al usuario que ingrese la categoría a la que 
pertenece que define el sueldo básico mensual 
(categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las horas extras. Se sabe que:
a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 más.
Realice un programa para calcular e informar el sueldo mensual del empleado, indicando si su sueldo supera o no los u$s 4000. */

var categoria = parseInt(prompt("Ingresa la categoría (1, 2, o 3):"));
var horasExtras = parseInt(prompt("Ingresa las horas extras trabajadas:"));
var sueldoBase;
switch (categoria) {
    case 1:
        sueldoBase = 2000;
        if (horasExtras > 20) {
            sueldoBase += 500;
        }
        break;
    case 2:
        sueldoBase = 3000;
        break;
    case 3:
        sueldoBase = 4000;
        if (horasExtras > 30) {
            sueldoBase += 1000;
        }
        break;
    default:
        alert("Categoría no válida.");
        break;
}

var sueldoTotal = sueldoBase;
if (sueldoTotal > 4000) {
    alert("felicidades, su sueldo supera los u$s 4000.");
} else {
    alert("Su sueldo no supera los u$s 4000.");
}
alert("Su sueldo mensual es: u$s " + sueldoTotal.toFixed(2));
    
    
});