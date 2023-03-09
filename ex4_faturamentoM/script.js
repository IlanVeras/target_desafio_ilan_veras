'use strict'
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
let onlyValues = dados.map(obj => obj.faturamento)
let faturamentoTotalMensal = onlyValues.reduce((tot, num) => {
    return tot + num
})
//FAZER A FÓMULA DA REGRA DE 3
let porcentagem$por$estado = dados.map(dado => {
    let percent = porcentagem(dado.faturamento)
    return {estado: dado.estado, percentual: percent}
})
console.log(porcentagem$por$estado)


//função que calcula o percentual de algo para o faturamentoTotalMensal
function porcentagem(valor_estado){
    let num = ((valor_estado / faturamentoTotalMensal) * 100).toFixed(2)
    return Number(num)
}



