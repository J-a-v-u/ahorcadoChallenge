function draw() {
    console.log("largo array "+ numPalabras);
    var canvas = document.getElementById("tablero");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = "rgb(255, 2, 36)";
      ctx.strokeRect(0, 0, 1200, 800)


    


      var lingrad1 = ctx.createLinearGradient(20, 730, 20, 780);
      lingrad1.addColorStop(0, 'rgb(255, 198, 41)');
      lingrad1.addColorStop(0.5,'rgba(255, 217, 0, 0.2)');
      lingrad1.addColorStop(1, 'black');


      var lingrad2 = ctx.createLinearGradient(50, 180, 90, 180);
      lingrad2.addColorStop(0, 'black');
      lingrad2.addColorStop(0.5,'rgba(255, 217, 0, 0.2)');
      lingrad2.addColorStop(1, 'rgb(255, 198, 41)');

      var lingrad3 = ctx.createLinearGradient(50, 160, 50, 180);
      lingrad3.addColorStop(0, 'rgb(255, 198, 41)');
      lingrad3.addColorStop(0.5,'rgba(255, 217, 0, 0.2)');
      lingrad3.addColorStop(1, 'black');

      //mastil

      ctx.fillStyle = lingrad2;
      //"rgba(255, 217, 0, 0.4)";
      ctx.fillRect (50, 180, 40, 550);
      

      //horizontal
      ctx.fillStyle = lingrad3;
      ctx.fillRect (50, 160, 350, 20);

      //base
      ctx.fillStyle = lingrad1;
      //ctx.fillStyle = "rgba(255, 217, 0, 0.2)";
      ctx.fillRect (20, 730, 1160, 50);

      //soga
      ctx.fillStyle = "rgba(255, 217, 0, 0.4)";
      ctx.fillRect (350, 160, 10, 90);



    

      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      ctx.shadowBlur = 5;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    
      ctx.font = '48px Times New Roman';
      ctx.fillStyle = 'red';
      //ctx.fillText('Juego del ahorcado', 550, 120);
   


    }
    
}














  
function dibujarParte(num) {

    var canvas = document.getElementById("tablero");
    if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
                          
                        if(num==0){
                         
                                //CUERPO
                                ctx.fillStyle = "rgb(255, 2, 36)";
                                ctx.fillRect (355, 250, 7, 200);
                                ctx.fill();
       
                        }
                        if(num==1){
                                //BRAZO izq
                            
                                ctx.translate(355, 280); //trnaslado centro
                                ctx.rotate(0.7); // rotato
                                ctx.fillRect (0, 0, 7, 130);
                                ctx.fill();
                                ctx.rotate(-0.7); //revierto la rotacion
                                ctx.translate(-355, -280);//revierto translacion
                                
      
                            
                        }
                        if(num==2){
                           
                                //BRAZO der
                                ctx.translate(355, 280); //trnaslado centro
                                ctx.rotate(5.5); // rotato
                                ctx.fillRect (0, 0, 7, 130);
                                ctx.fill();
                                ctx.rotate(-5.5); //revierto la rotacion
                                ctx.translate(-355, -280);//revierto translacion
     
                        }
                        if(num==3){
                                //PIERNA izq
                            
                                ctx.translate(355, 450); //trnaslado centro
                                ctx.rotate(0.7); // rotato
                                ctx.fillRect (0, 0, 7, 170);
                                ctx.fill();
                                ctx.rotate(-0.7); //revierto la rotacion
                                ctx.translate(-355, -450);//revierto translacion  
                        }
                        if(num==4){
                                //PIERNA der
                                ctx.translate(355, 450); //trnaslado centro
                                ctx.rotate(5.5); // rotato
                                ctx.fillRect (0, 0, 7, 170);
                                ctx.fill();
                                ctx.rotate(-5.5); //revierto la rotacion
                                ctx.translate(-355, -450);//revierto translacion
      
                        }
                        if(num==5){
                                //CABEZA
                                ctx.beginPath();
                                ctx.arc(385,245,30,0,Math.PI*2,true); // Círculo externo
                                ctx.fillStyle = "rgba(43, 14, 1)";
                                ctx.fill();


                                //OJO DERECHO
                                ctx.moveTo(401,245);
                                ctx.lineTo(407,251);
                                ctx.moveTo(401,251);
                                ctx.lineTo(407,245);
                                    //OJO IZQ
                                ctx.moveTo(370,230);
                                ctx.lineTo(376,236);
                                ctx.moveTo(370,236);
                                ctx.lineTo(376,230);
                                ctx.stroke();
                                ctx.closePath();
                                    //BOCA
                                ctx.beginPath(); 
                                ctx.arc(370,273,20,-0.5,-1.57,true); 
                                ctx.stroke();
                                
                                //lengua
                                
                                ctx.beginPath(); 
                                ctx.arc(382,260,4,0,4.5,false); 
                                ctx.fillStyle = "rgb(255, 2, 36)";
                                ctx.fill();
                                ctx.stroke();
                                ctx.closePath();  
                        }
    
    
    
    
    
                    }
    
    }
    






















function mensajeConDelay() {
    alert("Perdiste!");   
}

function back() {
    window.history.back();
   // window.location.reload(true);
}

function reload() {
    //window.history.back();
    window.location.reload(true);
}





function validar(word){

    var patronletras = /^[a-z]+/;
    var letraValida = Boolean();
    letraValida = patronletras.test(word);
        if(letraValida){
            return patronletras.test(word);
            }
        else{
            alert("Recuerda que debes ingresar sólo letras minúsculas, sin acentos!!!");
        }
}




var letra;
var n;
var sum;
var letraIngresadaArray = [];
var intentos;
var letrasErradas = [];
letrasErradas[0] = " ";
var letrasCorrectas = [];

function escucharTeclado() {


    window.addEventListener("keyup", function (event) {
        if(event){ 
        var letra = event.key;        
        var letraValida = Boolean();
        letraValida = validar(letra);
        console.log("validacion " + letraValida)
                       
                if(letraValida){
                    letraIngresadaArray.push(letra);
                    var intentos = letrasErradas.length
                    console.log(letra);  
                    console.log(letraIngresadaArray);  
                
                    var sum=0;
                        if(intentos<6){

                                            function multifuncion() {

                                                    for (var i = 0; i < letrasSecretas.length; i++) {
                                                                    
                                                                        if(letrasSecretas[i]==letra){
                                                                            n=i;
                                                                            sum=sum+1;
                                                                            console.log(n)
                                                                                    function insertLetraGuiones() {      //cambia letra acertada por guion/es
                                    
                                                                                    //  var letra = event.key;
                                                                                        console.log(letra);
                                                                                            guiones[n]=letra;
                                                                                            var letrasXguiones;
                                                                                            console.log(guiones);
                                                                                            letrasXguiones = guiones.join('  ');
                                                                                            letrasCorrectas.push(letra);
                                                                                            console.log(letrasXguiones);
                                                                                            escribirEnCanvas(letrasXguiones);
                                                                                            console.log(letrasCorrectas);
                                                                                            if(letrasSecretas.length==letrasCorrectas.length){preguntarSeguir("GANASTE!!!")}
                                                                                            else{}
                                                                                    }

                                                                            insertLetraGuiones();

                                                                        }

                                                                        else {
                                                                            /*
                                                                            var mostrarLetrasErroneas;
                                                                            
                                                                            letrasErradas.push(letra);
                                                                            mostrarLetrasErroneas = letrasErradas.join(' ');
                                                                            escribirLetraErrada(mostrarLetrasErroneas)
                                                                            //alert("no esta esa letra en la palabra!")
                                                                            dibujarParte(letrasErradas.length)   //poner aqui el codigo para mostrar partes de la persona
                                                                            console.log("numero de intentos "+intentos);
                                                                        */
                                                                        }
                                                    }
                                            }
                                    multifuncion();
                                                
                                            function comprobarLetra()  {
                                            if (sum>0) {return true} else {return false}
                                            }

                                    // console.log(comprobarLetra());  
                                    //comrpobaciones varias

                                    
                                if(comprobarLetra(letra)==true) {}


                                

                                else {
                                    var mostrarLetrasErroneas;
                                                                            
                                    letrasErradas.push(letra);
                                    console.log("letras erradas array"+letrasErradas);
                                    mostrarLetrasErroneas = letrasErradas.join(' ');
                                    escribirLetraErrada(mostrarLetrasErroneas);
                                    //alert("no esta esa letra en la palabra!")
                                    dibujarParte(intentos-1);   //poner aqui el codigo para mostrar partes de la personaxxxxxxxxx
                                    console.log("numero de intentos "+intentos);
                                            


                                }

                            } 
                        

                        if(intentos==6){

                                            escribirLetraErrada(mostrarLetrasErroneas)
                                            //alert("no esta esa letra en la palabra!")
                                            dibujarParte(intentos-1)   //poner aqui el codigo para mostrar partes de la personacxxxxxxxxxx
                                            console.log("numero de intentos "+intentos);
                                            this.removeEventListener("keyup", arguments.callee);
                                            
                                            setTimeout(preguntarSeguir, 1000, msgP);
                                            
                                            
                                            
                                        }
                        if(intentos>6){return}
                 }
/*
                 if(letraValida = false){
                     console.log("estoy aqui")
                    alert("Recuerda que debes ingresar sólo letras minúsculas, sin acentos!!!");
                }
*/
        } 
    });
 }





