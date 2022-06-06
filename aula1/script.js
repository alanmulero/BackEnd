
function valida(){

let senha = document.getElementById('senha').value;
let cadastrar = document.getElementById('cadastrar').value;
let quantidade = document.getElementById('cadastrar').value.length;
if(senha == cadastrar && document.getElementById('cadastrar').value.length > 5){
    
    document.getElementById('confirma').innerHTML = "A senha foi cadastrada com sucesso. " + senha 
    confirma.style.color = 'green';
    

    document.getElementById('quanto2').innerHTML = "Quantidade de caracteres digitados :"
    document.getElementById('quanto').innerHTML = + quantidade;
    quanto.style.color = 'green';
}
 if(senha != cadastrar){
    document.getElementById('erro').innerHTML = "Senha incorreta!"
    erro.style.color = 'red';
}


if(quantidade < 5){
    document.getElementById('quanto3').innerText = "Senha digitada tem só: " + quantidade + " caracteres";
    quanto3.style.color = 'red';
}


}


function func(){

let nome = document.getElementById('nome').value;
document.getElementById('resposta').innerHTML = "Olá " + nome;

}
