var palabrandom;
var letrasSecretas=[];

function palabra2Array() {
    var palabrandom = arrayPalabras[Math.floor((numPalabras*Math.random()))];
    var letrasSecretas = palabrandom.split('')
    return letrasSecretas;
}


function ocultarBoton(){


    document.getElementById("btnVisible").classList.add("btnInvisible")
}









var guiones = [];
function dibujarGuiones() {   //escribe guiones por primera vez
    ocultarBoton();
    
    letrasSecretas = palabra2Array();
    console.log(letrasSecretas)

    
    
    letrasSecretas.forEach(function() { 
                     guiones.push("_");
                    return guiones;
                        });

     console.log(guiones)

     var guionesMostrado;
        
     guionesMostrado = guiones.join('  ');
 
     console.log(guionesMostrado)
     escribirEnCanvas(guionesMostrado);
     
     //return guionesLetrasMostrado;
escucharTeclado();
}















function escribirEnCanvas(texto){
    var canvas = document.getElementById("tablero");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.clearRect(350, 610, 800, 110);
      ctx.fillStyle = 'white';
      //ctx.fillRect(350, 610, 800, 110);
      ctx.font = '90px serif';
      ctx.fillStyle = 'red';
      ctx.fillText(texto ,380, 690);
     
            }
}

function escribirLetraErrada(texto){
    var canvas = document.getElementById("tablero");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.clearRect(530, 400, 600, 125);
      ctx.fillStyle = 'white';
      //ctx.fillRect(530, 400, 600, 125);
      ctx.font = '50px serif';
      ctx.fillStyle = 'red';
     
      ctx.fillText("Letras erradas:" ,550, 450);
      ctx.fillText(texto ,550, 505);
            }
}
