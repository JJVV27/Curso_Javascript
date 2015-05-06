//document.write("Test");
//var pi = 3.14159;
//pi = Math.floor(pi);

//document.write(pi);

//var maxima;

//maxima = Math.max(27,34,1,7,89,100,2,89);
//document.write(maxima);

function mostrar(pos)

{

document.write(pos.coords.latitude + "," + pos.coords.longitude) ;


}

navigator.geolocation.getCurrentPosition(mostrar);