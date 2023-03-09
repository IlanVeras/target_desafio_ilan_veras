'use strict'

function randomStr(length) {
    let result = '';
    let char = 'AÁÀÃBCÇDEÉEFGHIJKLMNOÓÔPQRSTUVWXYZaáàãbcçdéfghijklmnopqrstuvwxyz0123456789';
    let charL = char.length;
    for (let i = 0; i < length; i++) {
      result += char.charAt(Math.floor(Math.random() * charL));
    }
    return result;
}
//Basta colocar o tamanho da string que dese
console.log(randomStr(10));
  