var arrayPalabras = [];
arrayPalabras[0] = "palabra";
arrayPalabras[1] = "misterio";
arrayPalabras[2] = "sueño";
arrayPalabras[3] = "mundo";
arrayPalabras[4] = "verdad";
arrayPalabras[5] = "amanecer";
arrayPalabras[6] = "camino";
arrayPalabras[7] = "palabra";
arrayPalabras[8] = "pensar";
arrayPalabras[9] = "ayuda";

var numPalabras = arrayPalabras.length;
var palabrasecreta;

function palabrarandom() {
var palabrandom = arrayPalabras[Math.floor((numPalabras*Math.random()))];
var palabrasecreta = palabrandom.toString()
console.log(palabrasecreta)
}
console.log(numPalabras)


