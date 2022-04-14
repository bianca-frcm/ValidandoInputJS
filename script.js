function required() {
    var nome = document.getElementById('nome').value;

    var cb = document.getElementById('checkbox');

    console.log("função required executada");

    if (nome === '' || cb.checked == false){
        alert("Por favor, preencha os dados");
        return false;
    }

    else 
    {
        alert(`Você foi cadastrado, ${nome}!`);
        return true; 
    }
}




/*




function validacao(){
    var nome = document.getElementById('nome').value

    var email = document.getElementById('email').value
    
    var cpf = document.getElementById('cpf').value

    if(nome == null || nome == '') {
        alert("Preencha o nome")
        return false
    }

}

function validacao(){
    var nome = document.forms["form"].value
    if (nome == ''){
        alert('Preencha os espaços')
        return false
    }
    else {
        alert('boa, espaços preenchidos')
        return true
    }
}




*/