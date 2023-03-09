'use strict'
//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;




let noZeros = dataF.filter(checkDayBiggerThan0)
    //Retirei os dias em que o faturamento foi 0


function checkDayBiggerThan0(array){
    return array.valor > 0
}
// • O menor valor de faturamento ocorrido em um dia do mês;
console.warn('O menor valor de faturamento ocorrido em um dia do mês')
let menorFaturamento = noZeros.reduce((dia1, dia2) => {
    return dia1.valor < dia2.valor ? dia1 : dia2
})
console.log(menorFaturamento)

// • O maior valor de faturamento ocorrido em um dia do mês;
console.warn('O maior valor de faturamento ocorrido em um dia do mês')
let maiorFaturamento = noZeros.reduce((dia1, dia2) => {
    return dia1.valor > dia2.valor ? dia1 : dia2
})
console.log(maiorFaturamento)


// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
let onlyValues = noZeros.map(dia => {
    return dia.valor
})
    //faço um array apenas dos valores

const mediaMensal = onlyValues.reduce(sumNumbers, 0) / onlyValues.length
    //calculo por somar todos os numeros e dividir eles pelo tamanho de onlyValues pois ele é seu array de origem e de mesmo tamanho

function sumNumbers(tot, number){
    return tot + number
}


let numDiaSuperMedia = onlyValues.map(dia => dia > mediaMensal).filter(dia => dia).length
console.warn('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal')
console.log(numDiaSuperMedia)
//O resto dos não faturados
// let zeros = dataF.filter(item => {return item.valor == 0})
// console.log(zeros)




  