function explosion()
{
	alert("BOOM");
	document.write("<h1>BOOM!!! Has elegido un campo minado :(</h1>")
	}
	
function ganaste()
{
	document.write("<h1>Eres un ganador  :)</h1>");
	
	}
	
var campo = [ [1 , 0 , 0],
			  [0 , 1 , 0],
			  [1 , 0 , 1] ];
			  

var textos = ["Cesped" , "Bomba"];

var  x, y;

alert("Estás en un  campo minado \n" + 
	"Elije una posición entre el 0 y el 2 para X  y para Y");

x = prompt("Posicion en X? (Entre 0 y 2 )");
y = prompt("Posicion en Y? (Entre 0 y 2 )");


if (x <= 2 && y <= 2)
{
var posicion = campo[x][y];
document.write("Elegiste " + textos[posicion] + "<br/>" )
if (posicion == 1) 
{

explosion();

}else{
	ganaste();
}
}
else
{
	document.write("Te saliste del campo")
	explosion();
}




