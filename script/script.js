var i = 0
const navegar = document.getElementById("navegar");
const comando = document.getElementById("comando");
const dialogo = document.getElementById("dialogo");



function avs (){
    navegar.hidden = true;
    comando.hidden = true;
    dialogo.hidden = false;
    Matricula.disabled = false;
    cpf.disabled = false;
    nome.disabled = false;
    email.disabled = false;
    tel.disabled = false;

    
        
}

function avs2 (){
    navegar.hidden = false;
    comando.hidden = false;
    dialogo.hidden = true;
    Matricula.disabled = true;
    cpf.disabled = true;
    nome.disabled = true;
    email.disabled = true;
    tel.disabled = true;
    
        
}



function mascara_cpf(){
    var cpf = document.getElementById('cpf')
    if(cpf.value.length == 3 || cpf.value.length == 7  ){
        cpf.value += "."
    }else if(cpf.value.length == 11 ){
        cpf.value += "-"

    }

}




class ViewerError extends Error {
  
    // Construtor da Classe ViewerError
    constructor(txtDeErro) {
      super(txtDeErro); // Chamando o construtor da superclasse (Error)
      alert(txtDeErro + '\n\n' + this.stack);
    }
}

//------------------------------------------------------------------------//

function obterElemento(idElemento) {
  
  var elemento = document.getElementById(idElemento);
  if(elemento == null) 
    throw new ViewerError("Não encontrei um elemento com id '" + idElemento + "'");
  return elemento;
}
