

const msgP = "PERDISTE!!!";

function preguntarSeguir(texto){
    if (confirm(texto+" Desea seguir jugando?") == true) {

        setTimeout(back,500);
        setTimeout(reload,1000);

            } 
    else {
        alert("Gracias por jugar!")
            }

  }
