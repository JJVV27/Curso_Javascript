var piedra = 0;
var papel = 1;
var tijera = 2;


var opcionUsuario;
var opcionMaquina = 1;
//var opcionMaquina = Math.random(0,2);

opcionUsuario = prompt("Qué eliges? \n Piedra : 0 \n Papel : 1 \n Tijera : 2" , 0);

//alert("Tu elegiste : " + opcionUsuario);

if (opcionUsuario == piedra)
{
	alert("Elegiste Piedra!");
	}if (opcionMaquina == piedra)
	{
		alert("Empate!");
		}
	else if (opcionMaquina == papel)
	{
		alert("Perdiste!");
		}
	else if (opcionMaquina == tijera)
	{
		alert("Ganaste!");
		}
		
		
else if(opcionUsuario == 1)
    
	
	{
	alert("Elegiste Papel!");
	
	}
//if(opcionMaquina == 0)
//	{
//		alert("Ganaste!");
//		}
	//	else if (opcionMaquina == 1)
	//	{
//			alert ("Empate!");
//			}
//		else if (opcionMaquina == 2)
//		{
	//		alert("Perdiste!");
	//		}
else if (opcionUsuario == 2){
	alert("Elegiste Tijera");
	}

//if(opcionMaquina == 0)
//	{
//		0alert("Perdiste!");
//		}
//	else if (opcionMaquina == 1)
//	{
//		alert("Ganaste!");
//		}
//	else if (opcionMaquina == 2)
//	{
//		alert("Empate!");
//		}