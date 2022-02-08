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


function agregarPalabra() {


var nuevaPalabra;
nuevaPalabra = document.getElementsByClassName("text-input")[0].value;
localStorage.setItem('arrayPalabrasN', nuevaPalabra);
console.log("ls "+ localStorage.arrayPalabrasN);
arrayPalabras.push(localStorage.arrayPalabrasN);
console.log(arrayPalabras);



}


var j=0;

function escucharBoton(){
    var nuevaPalabra;
nuevaPalabra = document.getElementsByClassName("text-input")[0].value;
    let boton = document.getElementById("add");
    boton.onclick = funcion;
    function funcion(){
          var stored;
          j=j+1;
          console.log("j="+ j);
          localStorage.setItem( j, nuevaPalabra);
          stored = localStorage.getItem(j);
          console.log("ls "+ stored);
         
          arrayPalabras.push(stored);
        
        console.log("nuevo array "+arrayPalabras)
      }

    
}