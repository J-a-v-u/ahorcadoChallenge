/*** array de palabras por default ***/

var arrayPalabras = [];
arrayPalabras[0] = "palabra";
arrayPalabras[1] = "misterio";
arrayPalabras[2] = "sueño";
arrayPalabras[3] = "mundo";
arrayPalabras[4] = "verdad";
arrayPalabras[5] = "amanecer";
arrayPalabras[6] = "camino";
arrayPalabras[7] = "pensamiento";
arrayPalabras[8] = "pensar";
arrayPalabras[9] = "ayuda";

var numPalabras = arrayPalabras.length;


function agregarPalabra() {   /*** agrega palabras al anterior array ***/
    var nuevaPalabra;
    nuevaPalabra = document.getElementsByClassName("text-input")[0].value;
    localStorage.setItem('arrayPalabrasN', nuevaPalabra);
    console.log("ls "+ localStorage.arrayPalabrasN);
    arrayPalabras.push(localStorage.arrayPalabrasN);
    console.log(arrayPalabras);
}




var j=0;

function escucharBoton(){   /***guarda en el local storage las palabras agregadas en la caja de texto ***/
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