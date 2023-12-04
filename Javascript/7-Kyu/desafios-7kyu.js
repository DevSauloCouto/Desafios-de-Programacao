//Encontre o próximo quadrado perfeito! - 7 KYU

//Você deve conhecer alguns quadrados perfeitos bem grandes. Mas e o PRÓXIMO? 
//Complete o findNextSquare método que encontra o próximo quadrado perfeito integral após aquele passado como parâmetro. 
//Lembre-se de que um quadrado perfeito integral é um número inteiro n tal que sqrt(n) também é um número inteiro.
//Se o parâmetro em si não for um quadrado perfeito, -1deverá ser retornado. Você pode assumir que o parâmetro não é negativo.
function findNextSquare(sq){
    let raiz = Math.sqrt(sq);
    return Number.isInteger(raiz) ? (raiz + 1) * (raiz + 1) : -1;
}

//Adição Binária - 7 KYU

//Implemente uma função que some dois números e retorne sua soma em binário. A conversão pode ser feita antes ou depois da adição.
//O número binário retornado deve ser uma string.
//Exemplos:(Entrada1, Entrada2 -> Saída (explicação)))
//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//OBS: Resolvi esse problema usando apenas minha lógica e conhecimento. Depois de estudar um pouco outras formas, descobrir maneiras
//mais práticas.
const addBinary = (a,b) => {
    let resultSoma = a + b;
    let binary = [];
    let convert = '';
    while(resultSoma > 0.8){
        binary.unshift(Math.floor(resultSoma % 2));
        resultSoma /= 2;
    }
    for(let char of binary){
        convert += char;
    }
    return convert;
}

//Remova o mínimo - 7 KYU

//O museu de coisas incríveis e sem graça
//O museu das coisas incríveis e sem graça quer se livrar de algumas exposições. Miriam, a arquiteta de interiores, bola um plano para 
//retirar as exposições mais chatas. Ela atribui uma classificação a eles e, em seguida, remove aquele com a classificação mais baixa.
//No entanto, assim que ela terminou de avaliar todas as exposições, ela está indo para uma feira importante, então ela pede que você 
//escreva um programa que lhe diga as classificações dos itens depois que um deles tiver removido o mais baixo. Justo.
//Tarefa
//Dada uma matriz de números inteiros, remova o menor valor. Não altere a matriz/lista original. Se houver vários elementos com o mesmo valor,
//remova aquele com índice inferior. Se você obtiver uma matriz/lista vazia, retorne uma matriz/lista vazia.
//Não altere a ordem dos elementos restantes.
//Exemplos
//* Input: [1,2,3,4,5], output = [2,3,4,5]
//* Input: [5,3,2,1,4], output = [5,3,2,4]
//* Input: [2,2,1,2,1], output = [2,2,2,1]
function removeSmallest(numbers){
    let copyArray = numbers.slice(0);
    let valueMin = numbers.indexOf(Math.min(...numbers));
    let removeElement = copyArray.splice(valueMin, 1);
    return copyArray;
}

//Classificar array por comprimento de string - 7 KYU

//Escreva uma função que receba um array de strings como argumento e retorne um array ordenado contendo as mesmas strings, ordenado do mais
//curto para o mais longo.
//Todas as strings no array passado para sua função terão comprimentos diferentes, então você não terá que decidir como ordenar múltiplas strings
//do mesmo comprimento
function sortByLength(array){
    array.sort((x,y) => x.length - y.length);
    return array;
} 

//A string termina com? - 7 KYU

//Complete a solução para que retorne verdadeiro se o primeiro argumento(string) passado terminar com o segundo argumento(também uma string).
function solution(str, ending) {
    let char = str;
    const separeChar = char.split("");
    separeChar.reverse();
    const final = ending.split("");
    final.reverse();
    let verified = [];
    let res;
    for(let i = 0; i < final.length; i++) {
        if(final[i] == separeChar[i]) {
            verified.push(true);
        } else {
            verified.push(false);
        }
    }
    if(ending == ""){
        verified.push(true);
    }
    for(let i = 0; i < verified.length; i++) {
        if(verified[i] == false) {
            res = false;
        }
    }
    if(res == false) {
        return res;
    } else {
        return verified[0];
    }
}

//Conte os divisores de um número - 7 KYU

//Conte o número de divisores de um número positivo n
//Observe que você deve retornar apenas um número, a contagem de divisores.
function getDivisorsCnt(n) {
    var num = 0;
    if(n == 1) return 1;
    if(n % Math.sqrt(n) == 0) num++;
    for(var i = 1; i < Math.sqrt(n); i++) {
        if(n % i == 0) {
            num += 2;
        }
    }
    return num;
}

//Dois para um - 7 KYU

//Pegue 2 strings s1 e s2 inclua apenas letras de a até z. Retorna uma nova string ordenada, a mais longa possível, contendo letras distintas -
//cada uma retirada apenas uma vez - provenientes de s1 ou s2.
function longest(s1, s2) {
    let newstr = s1.concat(s2);
    return newstr.split("").sort().reduce((a, b) => (a[a.length - 1] != b) ? (a + b) : a, ""); 
}

//Contagem de Vogais - 7 KYU

//Retorna o número (contagem) de vogais na string fornecida.
//Consideraremos a, e, i, o, ucomo vogais para este Kata (mas não y).
//A string de entrada consistirá apenas de letras minúsculas e/ou espaços.
function getCount(str){
    const regex = /[aeiou]/gi;
    const arr = str.match(regex);
    return arr == null ? 0 : arr.length;
}

//Você é um quadrado - 7 KYU

//Tarefa
//Dado um número inteiro, determine se é um número quadrado :
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)) && Math.sqrt(n) * Math.sqrt(n) == n ? true : false;
}