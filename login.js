function validar()
{
  var email= document.frmlogar.txtEmail.value;
  var senha= document.frmlogar.txtSenha.value;
 
  
  var txtEmailValido = "admin";
  var txtSenhaValida = "12345";
  
  if ((email == txtEmailValido) && (senha == txtSenhaValida))

  {    
    
    alert("Deu certo !");
    window.location = "index.html";
  }
  else{
        document.frmlogar.txtEmail.value = "Agora isso aqui não funciona";
        document.frmlogar.txtSenha.value = "Nem isso aqui ";
        document.frmlogar.txtEmail.disabled = true;
        document.frmlogar.txtSenha.disabled = true;
        alert("Algo deu errado");
        alert("Você será bloqueado");
     }
}

