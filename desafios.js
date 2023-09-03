//Grasshopper - Livro de Notas

//Complete a função para que ela encontre a média das três notas passadas e retorne o valor da letra associada a essa nota.
function getGrade (s1,s2,s3) {
    let media = (s1 + s2 + s3) / 3;
    return (media >= 90 && media <= 100) ? 'A' :
        (media < 90 && media >= 80) ? 'B' :
        (media < 80 && media >= 70) ? 'C' :
        (media < 70 && media >= 60) ? 'D' : 'F';
}

//Analise o bom int do problema de char

//Você pergunta a uma menina: "Quantos anos você tem?" Ela sempre diz “x anos”, onde x é um número aleatório entre 0 e 9.
//Escreva um programa que retorne a idade da menina (0-9) como um número inteiro.
//Suponha que a sequência de entrada do teste seja sempre uma sequência válida. 
//Por exemplo, a entrada de teste pode ser “1 ano” ou “5 anos”. O primeiro caractere da string é sempre um número.
function getAge(inputString){
    return parseInt(inputString.substring(0,1));
}

//Contando ovelhas...

//Considere uma matriz/lista de ovelhas onde algumas ovelhas podem estar faltando em seu lugar. 
//Precisamos de uma função que conte o número de ovelhas presentes no array (verdadeiro significa presente).
function countSheeps(arrayOfSheep){
    let test = arrayOfSheep.filter((num) => num == true);
    return test.length;
}

//Haverá espaço suficiente?

//Bob está trabalhando como motorista de ônibus. No entanto, ele se tornou extremamente popular entre os moradores da cidade. 
//Com tantos passageiros querendo embarcar em seu ônibus, ele às vezes tem que enfrentar o problema de não haver espaço suficiente no ônibus! 
//Ele quer que você escreva um programa simples dizendo se ele conseguirá acomodar todos os passageiros.
//Visão geral da tarefa:
//Você tem que escrever uma função que aceite três parâmetros:
//cap é a quantidade de pessoas que o ônibus pode acomodar, excluindo o motorista.
//on é o número de pessoas no ônibus, excluindo o motorista.
//wait é o número de pessoas esperando para entrar no ônibus, excluindo o motorista.
function enough(cap,on,wait){
    let busPerson = cap;
    let result = on + wait;
    if(result > busPerson){
        return result - busPerson;
    } else {
        return 0;
    }
}

//Retorno negativo

//Nesta tarefa simples, você recebe um número e deve torná-lo negativo. Mas talvez o número já seja negativo?
function makeNegative(num){
    if(num > 0){
        return -num;
    } else if(num == 0){
        return 0;
    } else {
        return num;
    }
}

//Converta um número em uma string!

//Precisamos de uma função que possa transformar um número (inteiro) em uma string.
function numberToString(num){
    let str = "";
    return str += num;
}

//Função 1 - olá mundo

//Faça uma função simples chamada greetque retorne o mais famoso "olá mundo!".
function greet(){
    return "hello world!";
}

//Pedra, Papel, Tesoura!

//Vamos jogar! Você tem que retornar qual jogador ganhou! Em caso de empate retorne Draw!.
const rps = (p1,p2) => {
    if(p1 == p2){
        return ("Draw!");
    } else if(p1 == "scissors" && p2 == "paper"){
        return ("Player 1 won!");
    } else if(p1 == "rock" && p2 == "scissors"){
        return ("Player 1 won!");
    } else if(p1 == "paper" && p2 == "rock"){
        return ("Player 1 won!");
    } else if(p1 == "scissors" && p2 == "rock"){
        return ("Player 2 won!");
    } else if(p1 == "paper" && p2 == "scissors"){
        return ("Player 2 won!");
    } else if(p1 == "rock" && p2 == "paper"){
        return ("Player 2 won!");
    }
}

//Você não pode codificar sob pressão

//Codifique o mais rápido que puder! Você precisa dobrar o número inteiro e retorná-lo
function doubleInteger(i) {
    return i * 2;
}

//Você está tocando banjo?

//Crie uma função que responda à pergunta "Você está tocando banjo?".
//Se o seu nome começar com a letra “R” ou “r” minúsculo, você está tocando banjo!
//A função recebe um nome como único argumento e retorna uma das seguintes strings:
//name + " plays banjo" 
//name + " does not play banjo"
function areYouPlayingBanjo(name) {
    if(name[0] == "R" || name[0] == "r"){
      return name + " plays banjo";    
    } else {
      return name + " does not play banjo";
    }
}

//Século do ano

//O primeiro século abrange do ano 1 até o ano 100 inclusive , o segundo século - do ano 101 até o ano 200 inclusive , etc.
//Tarefa: Dado um ano, retorne o século em que ele se encontra.
function century(year,seculo){
    seculo = year / 100;
    return Math.ceil(seculo);

}

//Converter um booleano em uma string

//Implemente uma função que converta o valor booleano fornecido em sua representação de string.
function booleanToString(b){
    if(b == true){
      return "true";
    } else {
      return "false";
    }
}

