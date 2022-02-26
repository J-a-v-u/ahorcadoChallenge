var palabrandom;
var letrasSecretas=[];

function palabra2Array() {      /***esta funcion elige una palabra random de la lista y la convierte en un array, 
                                     previo checkeo de si se agregaron palabras en el local storage y 
                                              en el caso de que falten agregar, las agrega******/
    if(arrayPalabras.length=10){
        if(localStorage.length>=1){
            for(i=1; i <= localStorage.length; i++){
              
          console.log("i="+ i);
          var nuevaPalabra;
          nuevaPalabra = localStorage.getItem(i);;
          console.log("ls o nuevapalabra"+ nuevaPalabra);
         
          arrayPalabras.push(nuevaPalabra);
        
        console.log("nuevo array "+arrayPalabras)

            }

        }

        if(localStorage.length==0){
            console.log("largo del ls "+localStorage.length)  
            console.log("nuevo array largo"+arrayPalabras.length)
            var palabrandom = arrayPalabras[Math.floor((arrayPalabras.length*Math.random()))];
            var letrasSecretas = palabrandom.split('')
            return letrasSecretas;

        }

                
               
    }
    if(arrayPalabras.length>10){        
    console.log("largo del ls "+localStorage.length)  
    console.log("nuevo array largo"+arrayPalabras.length)
    var palabrandom = arrayPalabras[Math.floor((arrayPalabras.length*Math.random()))];
    var letrasSecretas = palabrandom.split('')
    return letrasSecretas;
    
       }





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
     
escucharTeclado();
}





function escribirEnCanvas(texto){      /*** escribe en el canvas la variable "texto" ***/
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

function escribirLetraErrada(texto){       /***escribe la letra errada en su respectivo lugar ***/
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
