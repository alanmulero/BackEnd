function calculo(){

    let nome = document.getElementById('nome').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    peso = parseInt(peso)
    altura = parseFloat(altura);
    let conta = peso / Math.pow(altura, 2);
    conta = conta.toFixed(2);

    // Validando dados:
    if (nome == ""){
        alert("Digite seu nome.")
        nome.focus();
        return;
    }
    else if(altura == 0 || isNaN(altura)){
        alert("Informe a altura corretamente.");
        altura.focus();
        return;
    }
    else if (peso == 0 || isNaN(peso)){
        alert("Informe o peso corretamente.")
        peso.focus();
        return;
    }
    
    // Calculando formula:
    if (conta < 18.5){
        document.getElementById('resposta').innerHTML = nome + " Você está abaixo do peso ideal. Seu IMC " + conta;
        resposta.style.color = "red";
    }
    else if(conta > 18.5 && conta < 24.9){
        document.getElementById('resposta').innerHTML = nome + " Você está no peso ideal. Seu IMC " + conta
        resposta.style.color = "green";
    }
    else if( conta > 25 && conta < 29.9){
        document.getElementById('resposta').innerHTML = nome + " Você está acima do peso. IMC " + conta
        resposta.style.color = "orange";
    }
    else{
        document.getElementById('resposta').innerHTML = nome + " Você está na faixa de obesidade. IMC " + conta
        resposta.style.color = "red";
    }}

    // Limpando dados:
    function limpar(){
    nome = document.getElementById('nome').value = "";
    peso = document.getElementById('peso').value = "";
    altura = document.getElementById('altura').value = "";
    document.getElementById('resposta').innerHTML = "";
    }    
    
    

