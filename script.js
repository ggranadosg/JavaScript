// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Código JavaScript aquí
    console.log("¡Hola desde JavaScript!");

    /* Unidad 01
    Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de información por el momento con datos propios.
    */
    //1.Realice un algoritmo que muestre el nombre y apellido de un usuario
    alert("¡Hola, Profe Alejandro!");

    //2. Realice un algoritmo que muestre el promedio de 3 notas
    nota1= 10
    nota2=9
    nota3=8
    alert("El promedio es:" + (nota1+nota2+nota3)/3)

    //3. Realice el algoritmo para calcular e informar el perímetro del triángulo.
    lado1=10
    lado2=8
    lado3=6
    alert("El perímetro es:" + (lado1+lado2+lado3))

    //4. Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado.
    lado=lado1
    alert("El perímetro del cuadrado es:" + lado*4 +" y su área es de: "+lado*lado +" unidades cuadradas")

    //5. Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo.
    lado1=10
    lado2=5
    alert("El perímetro del rectángulo es:" + (lado1+lado2+lado1+lado2) + " y su área es de: "+lado1*lado2 +" unidades cuadradas")

    //6. Realice el algoritmo para calcular e informar el resto de la división entera entre los valores.
    var dividendo = 10;
    var divisor = 3;
    var cociente = Math.floor(dividendo / divisor);
    alert("El resto de la división entera es: " +cociente);
    
    //7. Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario.
    var nombre = prompt("Por favor, introduce tu nombre:", "Usuario");
    if (nombre !== null) {
        alert("Bienvenido, " + nombre + "!");
    } else {
        alert("El usuario ha cancelado.");
    }
    
    //8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.
    var radio = prompt("Por favor, introduce el radio del círculo:", "radio");
    if (radio !== null) {
        alert("El área del círculo es: " + 3.1416*radio*radio + "!");
    } else {
        alert("El usuario ha cancelado.");
    }

/*    Unidad 2
9. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un programa que arme y muestre el mensaje "Bienvenido", 
    seguido del nombre y apellido del usuario. */

var nombre = prompt("Ingresa tu nombre:");
var apellido = prompt("Ingresa tu apellido:");
var mensajeBienvenida = "Bienvenido, " + nombre + " " + apellido + "!";
alert(mensajeBienvenida); 

/*10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa para calcular e informar el perímetro 
    y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.*/
    const pi=3.1416
    var diametro = prompt("Ingresa el diámetro del círculo:");
    var radio=diametro/2;
    var resultado = "El perímetro es de:  " + 2*pi*radio + " unidades lineales y el área es de  " + pi*(radio**2) + " unidades cuadradas!";
    alert(resultado); 

/*11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio.*/
    var numero1 = parseFloat(prompt("Ingresa el primer número:"));
    var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    var numero3 = parseFloat(prompt("Ingresa el tercer número:"));
    var numero4 = parseFloat(prompt("Ingresa el cuarto número:"));
    var suma = numero1 + numero2 + numero3 + numero4;
    var promedio = suma / 4;
    alert("La suma de los números es: " + suma);
    alert("El promedio de los números es: " + promedio.toFixed(2)); 

/*12. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora y la cantidad de 
    horas trabajadas en el mes. Realice un programa para calcular e informar el sueldo mensual del empleado.*/
    var pagoporhora = parseFloat(prompt("Ingresa el pago por hora:"));
    var horas = parseFloat(prompt("Ingresa las horas laburadas:"));
    var sueldo = parseFloat(pagoporhora*horas);
    alert("El pago es de : " + sueldo); 

/*13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora, la cantidad de 
    horas trabajadas en el mes y los años de antigüedad en la empresa. Realice un programa para calcular e informar el sueldo mensual 
    del empleado, teniendo en cuenta que se le asigna un bono mensual igual al 15% del sueldo por año de antigüedad.*/
    var pagoporhora = parseFloat(prompt("Ingresa el pago por hora:"));
    var horas = parseFloat(prompt("Ingresa las horas laburadas:"));
    var aniosdeantiguedad=parseFloat(prompt("Ingresa la antiguedad en la empresa en años:"));
    var bonoporantiguedad=aniosdeantiguedad*0.15
    var sueldototal = parseFloat(pagoporhora*horas+bonoporantiguedad);
    alert("El pago es de : " + sueldototal); 

/*14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le solicita que ingrese el valor de la hora, 
    la cantidad de horas trabajadas en el mes, los años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más 
    caro vendido. Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna 
    un bono igual al 50% del seguro más caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos 
    y otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, 
calcular e informar el valor promedio de la hora del empleado.*/
    var pagoporhora = parseFloat(prompt("Ingresa el pago por hora:"));
    var horas = parseFloat(prompt("Ingresa las horas laburadas:"));
    var aniosdeantiguedad=parseFloat(prompt("Ingresa la antiguedad en la empresa en años:"));
    var importedesegurosvendidos=parseFloat(prompt("importe del total de seguros vendidos:"));
    var valseguromascaro=parseFloat(prompt("Valor del seguro más caro:"));
    var bonoporsegurocaro=parseFloat(valseguromascaro*.5);
    var bonoporsegurosvendidos=parseFloat(importedesegurosvendidos*.25);
    var bonoporantiguedad=aniosdeantiguedad*0.15
    var sueldototal = parseFloat(pagoporhora*horas+bonoporsegurocaro+bonoporsegurosvendidos+bonoporantiguedad);
    var valorpromedioporhora = parseFloat(sueldototal/horas);
    alert("El valor promedio por hora del empleado es de: " + valorpromedioporhora); 

/*Unidad 03 */
//15. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es cero, par o impar.
    var numero = parseInt(prompt("Ingresa un número:"));
    if (numero === 0) {
        alert("El número es cero.");
    } else {
        if (numero % 2 === 0) {
            alert("El número es par.");
        } else {
            alert("El número es impar.");
        }
    }

//6. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es múltiplo de 3.
    var numero = parseInt(prompt("Ingresa un número:"));
    if (numero === 0) {
        alert("El número es cero.");
    } else {
        if (numero % 3 === 0) {
            alert("El número es múltiplo de 3.");
        } else {
            alert("El número no es múltiplo de 3.");
        }
    }

//17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor ingresado es una vocal.
    var letra = prompt("Ingresa una letra:").toLowerCase();
    if (letra.length === 1 && /[aeiou]/.test(letra)) {
        alert("El valor ingresado es una vocal.");
    } else {
        alert("El valor ingresado no es una vocal.");
    }

/*18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un número. 
Realice un programa para informar si el número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si el número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros.*/
    if (extremoSuperior - extremoInferior < 5) {
        alert("La diferencia mínima del rango debe ser de al menos 5 números enteros.");
    } else {
        if (numero >= extremoInferior && numero <= extremoSuperior) {
            if (numero % 2 === 0) {
                alert("El número es par.");
            } else {
            alert("El número es impar.");
            }
        } else {
            alert("El número está fuera de rango.");
        }
    }


/*19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice un programa para calcular e informar 
    la operación solicitada entre ambos números. */
    var numero1 = parseFloat(prompt("Ingresa el primer número:"));
    var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    var operador = prompt("Ingresa un operador (+, -, *, /):");
    var resultado;
    
    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                alert("No se puede dividir por cero.");
            }
            break;
        default:
            alert("Ingrese un operador válido.");
            break;
    }
    
    if (resultado !== undefined) {
        alert("El resultado de la operación es: " + resultado);
    }


/*20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el algoritmo para informar si el triángulo 
    es equilátero, isósceles o escaleno.*/
    var lado1 = parseFloat(prompt("Ingresa el valor del lado 1:"));
    var lado2 = parseFloat(prompt("Ingresa el valor del lado 2:"));
    var lado3 = parseFloat(prompt("Ingresa el valor del lado 3:"));
    
    if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
        alert("Es un triángulo equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Es un triángulo isósceles");
    } else {
        alert("Es un triángulo escaleno");
    }


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

/*
Unidad 04
Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de información utilizar los métodos de JavaScript 
    vistos en clase. Cada ejercicio debe ser realizado en un archivo HTML y un JS (extensiones .html y .js).
22. Se le solicita al usuario que ingrese 3 números. Realice un programa para informar si el número es múltiplo de 3, múltiplo 5, 
    múltiplo de ambos o múltiplo de ninguno.
23. Se le solicita al usuario que ingrese los extremos de un rango numérico y una cantidad de valores desconocidos.
Realice un programa para informar si cada número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si es número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros.
24. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice un programa para calcular e informar cada 
    operación deseada entre los dos números. Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben 
    ser validados.
25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una comisión. Se desconoce la cantidad de alumnos. 
    Realice el algoritmo para informar:
 El porcentaje de alumnos aprobados (nota igual o superior a 4).
 El porcentaje de alumnos desaprobados (nota inferior a 4).
 El promedio de las notas.
Tenga en cuenta que solamente las notas pueden ir del 1 al 10.
26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice un programa para calcular e informar:
a. La sumatoria de los valores ingresados.
b. El menor valor ingresado.
c. El mayor valor ingresado.
27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular e informar:
a. El porcentaje de mujeres mayores a 25 años.
 b. El porcentaje de hombres menores de 18 años.
 c. El promedio de edad de las mujeres.
 d. El promedio de altura de los hombres.
 e. La menor edad ingresada.
 f. La mayor altura ingresada
*/

});
