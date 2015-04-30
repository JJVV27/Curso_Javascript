function aleatorio(minimo,maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1 ) + minimo );
	return numero;
	}

var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones =["Piedra" ,"Papel" , "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);
//var opcionMaquina = Math.random(0,2);

opcionUsuario = prompt("Qué eliges? \n Piedra : 0 \n Papel : 1 \n Tijera : 2" , 0);

//alert("Tu elegiste : " + opcionUsuario);

alert("Elegiste: " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);
if (opcionUsuario == piedra)
        {
		
		
		
		if(opcionMaquina ==  piedra)
		{
		alert("Empate!");
		}
		else if(opcionMaquina == papel)
		{
		alert("Perdiste! :(")
		}else if (opcionMaquina == tijera)
		{
	    alert("Ganaste!")
		}
		
        }
		
else if (opcionUsuario == papel)

		{
		
		
		
  		if(opcionMaquina == piedra)
		{
		alert("Ganaste!");
		}
		
		else if (opcionMaquina == papel)
		{
		alert ("Empate!");
		}
		
		
		else if (opcionMaquina == tijera)
		{
		alert("Perdiste!  :(");
		}
		}
		
else if (opcionUsuario == tijera)

		{
		
		
		
		
		if(opcionMaquina == piedra)
		{
		alert("Perdiste!   :(");
		}
		
		
		else if (opcionMaquina == papel)
		{
		alert("Ganaste!");
		}
		
		else if (opcionMaquina == tijera)
		{
		alert("Empate! ");
		}
		}
else 
    {
	alert("Porque elejiste esa opción , presiona F5");
	}