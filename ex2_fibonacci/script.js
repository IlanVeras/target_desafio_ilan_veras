'use strict'
const numUsuario = document.querySelector('.numtxt')
const btn = document.querySelector('#btn')
let paragraph = document.querySelector('#paragrafo')


//Fução que verifica se o faz ou não parte da sequencia de Fibonacci
function isFibonacci(num) {
    let a = 0;
    let b = 1;
    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    let result = b === num
    if(result == true || num == 0){
        return `O número ${num} pertence a sequência de Fibonacci`
    }else{
        return `O número ${num} não pertence a sequência de Fibonacci`
    }
  }

//Função que mostra a sequência de Fibonacci do número passado
function fibonacciSequence(num) {
    let sequence = [0, 1];
    let i = 2;
    while (sequence[i - 1] < num) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
      i++;
    }
    return sequence
}

    //aqui estou repassando o número e as mensagens aparecerão no console
    console.log(isFibonacci(13), fibonacciSequence(13))
    console.log(isFibonacci(15), fibonacciSequence(15))

  


//Função que nostra na tela tanto se o numero repassado pelo usuário faz parte ou não da sequência de Fibonacci e imprime eles na tela do usuário junto com sua sequência
function verify(){
    let number = Number(numUsuario.value)
    let estado = isFibonacci(number)
    let sequence = fibonacciSequence(number)
    if(number != 0){
        sequence = sequence
    }else{
        sequence = '0'
    }
    paragraph.innerHTML = `${estado} <br><br><br> [${sequence}]`
    
}



btn.addEventListener('click', verify)

  