

function Pokemon(n,v,a)

{
	this.grito = "Pika!";
	this.nombre = n ;
	this.vida = v ;
	this.ataque = a;
    this.gritar = function()
    {
    	alert(this.grito);
    }

}

function inicio()
{

alert("Esto es despues del inicio")
var pikachu = new Pokemon("Nombre :Pikachu" , "Salud : 100" , "Ataque : 55");



nombrePokemon.textContent = pikachu.nombre;
saludPokemon.textContent = pikachu.vida;
ataquePokemon.textContent = pikachu.ataque;
}

alert("Esto es antes del inicio")



//document.write("Test");
//var pi = 3.14159;
//pi = Math.floor(pi);

//document.write(pi);

//var maxima;

//maxima = Math.max(27,34,1,7,89,100,2,89);
//document.write(maxima);

//function mostrar(pos)

//{

//document.write(pos.coords.latitude + "," + pos.coords.longitude) ;


//}

//navigator.geolocation.getCurrentPosition(mostrar);