function required()
{
    var nome = document.getElementById('nome').value;


    if (nome === ""){
        alert("Por favor, preencha os dados");
        return false;
    }

    else 
    {
        alert(`Você foi cadastrado, ${nome}!`);
        return true; 
    }
}