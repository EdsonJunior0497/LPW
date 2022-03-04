var i = 0
const navegar = document.getElementById("navegar");
const comando = document.getElementById("comando");
const dialogo = document.getElementById("dialogo");

function avs (){
    navegar.hidden = true;
    comando.hidden = true;
    dialogo.hidden = false;
        
}

function avs2 (){
    navegar.hidden = false;
    comando.hidden = false;
    dialogo.hidden = true;
        
}
