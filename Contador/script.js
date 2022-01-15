//Só pra lembrar, const != var, uma vez que const não pode ter seus valores atualizados.

//Aqui eu crio uma variável, e através do "getElementById", eu ligo a variável récem criada com o Id 
var currentNumberWrapper = document.getElementById('currentNumber'); //Variavel ligada ao HTML
var currentNumber = 0; //Variável que usarei como contador

function increment(){
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber; 
        
        if(currentNumber > 0)
          currentNumberWrapper.style.color= "#2a9ecc";
    }
    else
    alert('Você digitou um número maior do que 10')
}

function decrement(){
    if(currentNumber > -10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if(currentNumber < 0)
          currentNumberWrapper.style.color= "red";
        
    }
    else
      alert('Você digitou um número menor que -10')
}