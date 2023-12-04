//Palavra com maior pontuação - 6 KYU (PRIMEIROOOOO)

//Dada uma sequência de palavras, você precisa encontrar a palavra com pontuação mais alta.
//Cada letra de uma palavra ganha pontos de acordo com sua posição no alfabeto: a = 1, b = 2, c = 3 etc.
//Por exemplo, a pontuação de abad é 8(1 + 2 + 1 + 4).
//Você precisa retornar a palavra com pontuação mais alta como uma string.
//Se duas palavras tiverem a mesma pontuação, retorne a palavra que aparece primeiro na string original.
//Todas as letras serão minúsculas e todas as entradas serão válidas.
function high(x){
    const words = x.split(" ");
    let pointsWord = 0;
    let word = "";
    for(let i = 0; i < words.length; i++) {
        arrPoints = [];
        for(let j = 0; j < words[i].length; j++) {
            const alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            const letters = alphabet.indexOf(words[i][j]);
            arrPoints.push(letters);
            result = arrPoints.reduce((acc, val) => acc + val, 0);
        }
        if(pointsWord < result){
            pointsWord = result;
            word = words[i];
        }
        arrPoints = [];
    }
    return word;
}

//Matriz.diff - 6 KYU

//Seu objetivo neste kata é implementar uma função diferença, que subtrai uma lisTa de outra e retorna o resultado.
//Deve remover todos os valores de list a, que estão presentes em list b mantendo sua ordem.
//array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
//Se um valor estiver presente em b, todas as suas ocorrências deverão ser removidas do outro:
//array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
function arrayDiff(a, b) {
    const res = [];
    a.forEach(value => {
      if(!b.includes(value)){
        res.push(value);
      }
    })
    return res;
}

//Quebrar camelCase - 6 KYU

//Complete a solução de forma que a função quebre a casca do camelo, utilizando um espaço entre as palavras.

function solution(string) {
    const uppers = string.match(/[A-Z]/g);
    const strNoUpper = string.split(/[A-Z]/g);
    const strForm = [strNoUpper[0]];
  
    for(let i = 1; i < strNoUpper.length; i++){
        strForm.push(" ");
        strForm.push(uppers[i - 1] + strNoUpper[i]);
    }
  
    let camelCase = "";
    strForm.forEach(str => {
        camelCase += str;
    });
  
    return camelCase;
}

//Faça uma caminhada de 10 minutos - 6 KYU

//Você mora na cidade de Cartesia, onde todas as estradas estão dispostas em uma grade perfeita. Você chegou dez minutos mais cedo 
//para um compromisso, então decidiu aproveitar para fazer uma pequena caminhada. A cidade fornece aos seus cidadãos um aplicativo 
//de geração de caminhada em seus telefones - sempre que você pressiona o botão, ele envia uma série de sequências de uma letra 
//representando instruções para caminhar (por exemplo, ['n', 's', 'w', 'e']). Você sempre anda apenas um único quarteirão para cada 
//letra (direção) e sabe que leva um minuto para percorrer um quarteirão da cidade, então crie uma função que retornará verdadeiro se 
//a caminhada que o aplicativo lhe dá levará exatamente dez minutos (você não quero chegar cedo ou atrasado!) e, claro, o levará de volta 
//ao ponto de partida. Caso contrário , retorne falso.

function isValidWalk(walk) {
    //insert brilliant code here
    let numN = 0;  
    let numS = 0;
    let numE = 0;
    let numW = 0;
    walk.map(dir => {
        if(dir == 'n') numN++;
        if(dir == 's') numS++;
        if(dir == 'e') numE++;
        if(dir == 'w') numW++; 
    })
    
    return walk.length < 10 || walk.length > 10 ? false : numS == numN && numW == numE ? true : false;
    
}

//Simples Simples Simples Expansão de String - 6 KYU

//Dada uma string que inclui caracteres alfanuméricos ("3a4B2d"), retorne a expansão dessa string: 
//Os valores numéricos representam a ocorrência de cada letra anterior a esse valor numérico. 
//Não deve haver caracteres numéricos na string final.

//Notas
//A primeira ocorrência de um valor numérico deve ser o número de vezes que cada caractere atrás dele é repetido, até que o próximo valor 
//numérico apareça
//Se houver vários caracteres numéricos consecutivos, apenas o último deverá ser usado (ignore os anteriores)
//Strings vazias devem retornar uma string vazia.
//Seu código deve funcionar com letras maiúsculas e minúsculas.
function stringExpansion(s) {
    const strWithoutNums = s.match(/^[a-zA-Z]*[^\d]/g);

    const strWithNums = s.match(/\d{1,1}[a-zA-Z]+/g);

    const pairs = [];

    for(let i = 0; !strWithNums ? null : i < strWithNums.length; i++){
        pairs.push(strWithNums[i].split(""));
    }

    const rep = (num, str) => {
        return str.repeat(num);
    }

    let stringExp = "";

    for(let i = 0; i < pairs.length; i++){
        for(let n = 0, l = 1; l < pairs[i].length; l++){
            stringExp += rep(+pairs[i][n], pairs[i][l])
        }
    }
    
    return !stringExp && /[\d]/g.test(s) ? "" : !stringExp ? s : !strWithoutNums ? stringExp : strWithoutNums + stringExp;
}
