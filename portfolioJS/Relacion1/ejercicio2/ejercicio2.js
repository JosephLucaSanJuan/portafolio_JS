/* javascript para el ejercicio 2 de portfolio de lenguajes de marcas */

// indicamos al principio del javascript, que evento dispara qué función

//document.getElementById("calcular").onclick(); *** aquí iría la función ***

// esto se hace cuando la función es muy corta, escueta

// segunda forma  de hacerlo (y más correcta), con addEvenListener

document.getElementById("calcular").addEventListener("click", calcular);

function calcular(){

    // obtener dato (radio)

    const PI = 3.1416; // no seria necesario, está en la librería matemática básica de JS
    let radio = Number(document.getElementById('radio').value);

    // realizar cálculos

    let circunferencia = 2 * radio * PI;
    let circulo = radio ** 2 * PI;
    let esfera = radio ** 3 * PI;

    // mostrar resultados

    // te atreves a refactorizar la salida de resultados?????

    // primer nodo li creado enganchado al arbol original

    // 1- crear el nodo li
    let nuevoNodo = document.createElement(li);

    //2 - meter contenido en el nodo: el resultado
    nuevoNodo.innerHTML = "La longitud de la circunferencia es: " + circunferencia.toFixed(2);

    //3- enganchar el nodo en la lista padre
    document.getElementById("resultado"). appendChild(nuevoNodo);

    document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es : "+circunferencia;

    document.getElementById("circulo").innerHTML="El área del círculo es : "+circulo;

    document.getElementById("esfera").innerHTML="El volumen de la esfera es : "+esfera;/****/
}