/*Actividad 1 booklet 
Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración./*

/*let nombre = "Homero "
let apellido = "Simpson "
let edad = "48"
let homero = nombre + apellido + edad
console.log(homero)*/

/*Actividad 2 booklet
Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.*/


/*const cityOne = "Londres "
const cityTwo = "California "
const cityThree = "Los Angeles "
const cityFour = "Nuevo Mexico "
const cityFive = "Indiana"
let citys = cityOne + cityTwo + cityThree + cityFour + cityFive
console.log(citys)*/

/*Actividad 3 booklet
Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.*/

/*let nombre = "Carlos ", apellido = "Meza ", edad = "22 ", fechaDeNacimiento = "24/11/05 ", pais = "Argentina "
const domicilio = "Calle falsa 123"
let carnet = "Nombre:" +nombre+ "Apellido:"+ apellido+ "Edad:" +edad+ "Fecha de Nacimiento:"+fechaDeNacimiento+ "Pais:" +pais + "Domicilio:"+domicilio
console.log(carnet)*/

/*Actividad 4 booklet
Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.*/

/*let integrante1 = prompt("Ingrese el nombre del primer integrante")
let integrante2 = prompt("Ingrese el nombre del segundo integrante")
let integrante3 = prompt("Ingrese el nombre del tercer integrante")
let integrante4 = prompt("Ingrese el nombre del cuarto integrante")
let integrante5=prompt("Ingrese el nombre del quinto integrante")

let familia = integrante1 + " "+ integrante2 + " "+integrante3 + " "+integrante4 + " "+integrante5
alert("Los miembros de la familia son:" + familia)*/

/*Actividad 5 booklet
Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.*/

/*let precio = parseFloat(prompt("Ingrese el valor del producto"))
let descuento1 = precio - (precio * 0.2)

alert("El valor es: " + descuento1)*/

/*---------------------------------------------------------------------------------------------------------------------
CLASE 2*/

//Actividad 1
/*Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”. */

/*
let usuario = prompt("Ingrese el nombre del delincuente")
let delincuente = "Bart"
if(usuario == "Bart"){
    alert("Yo fui")
}else{
    alert("Yo no fui")
}*/

/* Actividad 2
Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.*/

/*
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
*/

/*
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
*/

/*
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
Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.*/  

/*
let producto1 = prompt("Ingrese el primer producto")
let producto2 = prompt("Ingrese el segundo producto")
let producto3 = prompt("Ingrese el tercer producto")
let producto4 = prompt("Ingrese el cuarto producto")
if ((producto1 !="") && (producto2!="") && (producto3!="") && (producto4!="")){
    alert(producto1 + " " + producto2 + " " + producto3 + " " + producto4 )
}else {
    alert("Error: Es necesario cargar todos los productos")
}
*/