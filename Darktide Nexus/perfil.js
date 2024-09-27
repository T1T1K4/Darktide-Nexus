 function cadastraUser(){ 
     document.getElementById("hello-user").innerHTML="Cadrasto Iniciado"; 

     var nome = document.getElementById("txtNome").value; 
     var email = document.getElementById("txtEmail").value; 
     var senha = document.getElementById("txtSenha").value; 

     // console.log(nome); 

     if (nome.length == 0 ) { 
        document.getElementById("error-Nome").style.display = "block"; 

     } else{ 
         document.getElementById("error-Nome").style.display = "none"; 
     } 

     if(senha.length == 0 ){
         document.getElementById("error-Senha").style.display = "block"
     } else{
         document.getElementById("error-Senha").style.display = "none"
     }

     if (email.length == 0){ 
         document.getElementById("error-Email").style.display = "block"; 
     }else{ 
         document.getElementById("error-Email").style.display = "none"; 
     } 
     if (nome.length != 0 && email.length != 0){ 
         document.getElementById("hello-user").innerHTML = `voce entrou como ${nome}` ; 
         document.getElementById("cadastro-user").style.display = "NOEN" 
     } 
} 
