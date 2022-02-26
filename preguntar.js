

const msgP = "PERDISTE!!!";

function preguntarSeguir(texto){    /***pregunta de seguir jugando ***/
    if (confirm(texto+" Desea seguir jugando?") == true) {

        setTimeout(back,500);
        setTimeout(reload,1000);

            } 
    else {
        alert("Gracias por jugar!")
            }

  }
