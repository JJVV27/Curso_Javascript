var peso;
var pesoEnMarte;

alert ("Quieres saber tu peso en Marte?");
peso = prompt("Cuál es tu peso en Kg.?");
peso = parseInt(peso) ;

pesoEnMarte = (peso / 9.81 ) * 3.711;

alert ("Tu peso en Marte es  " + Math.round(pesoEnMarte) + " Kg.");



//var  nombre = "Jonathan";
//var  apellido = "Vega";
//var  edad = 26;

//alert(nombre + " " +apellido + "\n" + edad + " años. ");