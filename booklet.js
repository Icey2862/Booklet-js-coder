//Clase 1

/*Actividad 1 booklet 
Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración.

let nombre = "Homero "
let apellido = "Simpson "
let edad = "48"
let homero = nombre + apellido + edad
console.log(homero)*/

/*Actividad 2 booklet
Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

const cityOne = "Londres "
const cityTwo = "California "
const cityThree = "Los Angeles "
const cityFour = "Nuevo Mexico "
const cityFive = "Indiana"
let citys = cityOne + cityTwo + cityThree + cityFour + cityFive
console.log(citys)*/

/*Actividad 3 booklet
Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

let nombre = "Carlos ", apellido = "Meza ", edad = "22 ", fechaDeNacimiento = "24/11/05 ", pais = "Argentina "
const domicilio = "Calle falsa 123"
let carnet = "Nombre:" +nombre+ "Apellido:"+ apellido+ "Edad:" +edad+ "Fecha de Nacimiento:"+fechaDeNacimiento+ "Pais:" +pais + "Domicilio:"+domicilio
console.log(carnet)*/

/*Actividad 4 booklet
Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.

let integrante1 = prompt("Ingrese el nombre del primer integrante")
let integrante2 = prompt("Ingrese el nombre del segundo integrante")
let integrante3 = prompt("Ingrese el nombre del tercer integrante")
let integrante4 = prompt("Ingrese el nombre del cuarto integrante")
let integrante5=prompt("Ingrese el nombre del quinto integrante")

let familia = integrante1 + " "+ integrante2 + " "+integrante3 + " "+integrante4 + " "+integrante5
alert("Los miembros de la familia son:" + familia)*/

/*Actividad 5 booklet
Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

let precio = parseFloat(prompt("Ingrese el valor del producto"))
let descuento1 = precio - (precio * 0.2)

alert("El valor es: " + descuento1)*/

/*---------------------------------------------------------------------------------------------------------------------
CLASE 2*/

/*Actividad 1
Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”. 

let usuario = prompt("Ingrese el nombre del delincuente")
let delincuente = "Bart"
if(usuario == "Bart"){
    alert("Yo fui")
}else{
    alert("Yo no fui")
}*/

/* Actividad 2
Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

let tecla = prompt("Elja una tecla")
if ((tecla == "y") || (tecla == "Y")){
    alert("Correcto");
} else {
    alert("Error");
}
*/

/*Actividad 3
Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.


let numero = prompt("Elije un numero")
if (numero==1){
    alert("Elegiste a Homero")
}else if (numero==2){
    alert("Elegiste a Marge")
}else if (numero==3){
    alert("Elegiste a Bart")
}else if (numero==4){
    alert("Elegiste a Lisa")
}else{
    alert("El numero ingresado no es correcto")
}
*/

/*Actividad 4
Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.

let numero = prompt("Ingrese un numero")
if (numero <= 1000){
    alert("Presupuesto bajo")
} else if ((numero =>1000) && (numero <= 3000)){
    alert("Presupuesto Medio")
}else {
    alert("Presupuesto alto")   
}
*/

/*Actividad 5
Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

let producto1 = prompt("Ingrese el primer producto")
let producto2 = prompt("Ingrese el segundo producto")
let producto3 = prompt("Ingrese el tercer producto")
let producto4 = prompt("Ingrese el cuarto producto")
if ((producto1 !="") && (producto2!="") && (producto3!="") && (producto4!="")){
    alert("Los productos seleccionados son los siguientes: " + producto1 + " " + producto2 + " " + producto3 + " " + producto4 )
}else {
    alert("Error: Es necesario cargar todos los productos")
}*/


//-------------------------------------------------------------------------------------------------------------------

// CLASE 3

/*Actividad 1
Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.*/

/*let numero = prompt("Ingrese un numero")
let palabra = prompt("Ingrese una palabra")
for(let i=1; i<=numero; i++){
    console.log(palabra + i )
}*/




/*Actividad 2
Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.


let numero = prompt("Ingrese un numero")
for(let i = 1; i <= 10; i++){
    if(i > 4){
        break
    }
    console.log (i + "lado")
} */

/* Actividad 3
Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.

let alumnos = " "
for (let i = 1; i <=10; i++){
    alumnos += prompt("Ingrese el numero de alumnos") + "\n"
}
console.log (alumnos)
*/

/* Actividad 4
Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados.


let entrada = prompt("Ingrese un nombre")
let nombres = ""
while(entrada != "Voldemort"){
    nombres += entrada
    entrada = prompt("Ingrese un nombre")
} alert(nombres)*/

/*Actividad 5
Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.


let numero = prompt("Ingrese un numero del 1 al 4")
while (numero != "ESC"){
    switch (numero){
        case "1" :
            alert("Tomate")
            break
        case "2" :
            alert("Papa")
            break
        case "3":
            alert ("Carne")
            break
        case "4":
            alert("Pollo")
            break
        default:
            alert("Numero ingresado invalido")
    }
    numero = prompt("Ingrese un numero del 1 al 4")
}*/

//-------------------------------------------------------------------------------------------------------------------

// CLASE 4

/*Actividad 1
Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones.
.*/
/*
function entrada(){
    let entrada = parseInt(prompt("Ingrese un valor del 1 al 4"))
    if (entrada == 1){
        valor = "one"
    } else if (entrada == 2){
        valor = "two"
    } else if (entrada == 3){
        valor = "three"
    } else if (entrada == 4){
        valor = "four"
    } else {
        valor = "zero"
    }
    return valor
}
function procesamiento(){
    if (valor == "one"){
        salida = "Pollo"
    } else if (valor == "two"){
        salida = "Carne"
    } else if (valor == "three"){
        salida = "lechuga"
    } else if (valor == "four"){
        salida = "carne"
    } else {
        salida = "zero"
    } return salida
}
function salida(salida){
    if (salida == "zero"){
        alert("No ingreso un producto valido")
    }else {
        alert("el producto es "  + salida)
    }
}   
salida(procesamiento(entrada()))
.*/

/*Actividad 2
Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.
.*/
/*
function redondeo(valor){
    return Math.round(valor)
}
for (let i = 0; i < 5; i++) {
    let entrada = prompt("INGRESAR NUMERO");
    alert(redondeo(entrada));
}*/


/*Actividad 3
Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.   
.*/

/*
function impuesto(precio, porcentaje){
    return precio + ((precio * porcentaje)/100)
}

for (let i = 0; i < 5; i++) {
    let resultado = impuesto(parseFloat(prompt("Ingrese un precio")), parseFloat(prompt("ingrese un %")))
    alert(resultado)
}  
*/ 

/*Actividad 4
Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.
*/
/*
const DOLAR = 150
const cotizarDolar = pesos => pesos / DOLAR
const cotizarPesos = dolar => dolar * DOLAR
let eleccion = prompt("elija el tipo de conversion \n 1. Pesos a dolar \n 2. Dolar a pesos")
let entrada = prompt("Ingrese el valor a convertir")
    switch (eleccion){
        case "1":
            alert("El valor de $"+ entrada+ "pesos = $ " +cotizarDolar(entrada) +"dls" )
            break
        case "2":
            alert("el valor de $ "+ entrada + "dls = S " +cotizarPesos(entrada)+ "pesos")
            break
        default:
            break
    } 
*/

/*Actividad 5
Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.
function validacion(cadena){
    return cadena != ""
}
let entrada = prompt("Ingrese un dato (Escriba ESC para salir")
while (entrada != "ESC"){
    alert(validacion(entrada))
    entrada = prompt("Ingrese un dato (Escriba ESC para salir")
}
*/

//-------------------------------------------------------------------------------------------------------------------

// CLASE 5

