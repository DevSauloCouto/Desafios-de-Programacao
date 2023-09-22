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

//CASO ALTERNATIVO <=> CASO ALTERNATIVO

//Defina String.prototype.toAlternatingCase(ou uma função/método semelhante, como to_alternating_case // 
//no idioma selecionado; consulte a solução inicial para obter detalhestoAlternatingCase ) de forma que 
//cada letra minúscula se torne maiúscula e cada letra maiúscula se torne minúscula. Por exemplo:ToAlternatingCase
String.prototype.toAlternatingCase = function (){
    let str = '';
    for(let i = 0; i < this.length; i++){
        if(this[i] == this[i].toLowerCase()){
            str += this[i].toUpperCase();
        } else {
            str += this[i].toLowerCase();
        }
    }
    return str;
}

//Conversão de DNA para RNA

//Ácido desoxirribonucléico, DNA é a principal molécula de armazenamento de informações em sistemas biológicos.
//É composto por quatro bases de ácidos nucleicos Guanina ('G'), Citosina ('C'), Adenina ('A') e Timina ('T').
//O ácido ribonucleico, RNA, é a principal molécula mensageira nas células. O RNA difere ligeiramente do DNA em sua
//estrutura química e não contém timina. No RNA, a timina é substituída por outro ácido nucleico, uracila ('U').
//Crie uma função que traduza uma determinada sequência de DNA em RNA.
function DNAtoRNA(dna){
    return dna.replaceAll("T", "U");
}

//Relógio Série Iniciante #2

//O relógio mostra hhoras, mminutos e ssegundos depois da meia-noite.
//Sua tarefa é escrever uma função que retorne o tempo desde a meia-noite em milissegundos.
function past(h,m,s){
    segundos = s * 1000;
    minutes = m * 60000;
    hours = h * 3600000;
    return segundos + minutes + hours;
}

//Trimestre do ano

//Dado um mês como um número inteiro de 1 a 12, retorne a qual trimestre do ano ele pertence como um número inteiro.
//Por exemplo: o mês 2 (fevereiro), faz parte do primeiro trimestre; o mês 6 (junho), faz parte do segundo trimestre; 
//e o mês 11 (novembro), faz parte do quarto trimestre.
function quarterOf(month){
    if(month < 4){
        return 1;
    } else if(month < 7){
        return 2;
    } else if(month < 10){
        return 3;
    } else {
        return 4;
    }
}

//Eu te amo, um pouco, muito, apaixonadamente... de jeito nenhum

//Quem se lembra do tempo no pátio da escola, quando as meninas pegavam uma flor e arrancavam suas pétalas, 
//dizendo cada uma das seguintes frases cada vez que uma pétala era rasgada:
//"Eu te amo"; "um pouco"; "bastante"; "apaixonadamente"; "loucamente"; "de jeito nenhum"
//Se houver mais de 6 pétalas, recomece com "I love you" 7 pétalas, "a little" 8 pétalas e assim por diante.
//Quando a última pétala foi rasgada, houve gritos de excitação, sonhos, pensamentos e emoções emergentes.
//Seu objetivo neste kata é determinar qual frase as meninas diriam na última pétala para uma flor com um 
//determinado número de pétalas. O número de pétalas é sempre maior que 0.
const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
];
function howMuchILoveYou(n){
    return phrases[(n - 1) % phrases.length]; 
}

//Mantenha-se hidratado!

//Nathan adora andar de bicicleta.
//Como Nathan sabe que é importante manter-se hidratado, ele bebe 0,5 litro de água por hora de ciclismo.
//Você recebe o tempo em horas e precisa retornar a quantidade de litros que Nathan irá beber, arredondado para o menor valor.
function litres(time){
    return Math.floor(time / 2);
}

//Retornando Strings 
 
//Faça uma função que retornará uma instrução de saudação que usa uma entrada; seu programa deve retornar, 
//"Hello, <name> how are you doing today?".
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

//Documentação escolar n1 da série para iniciantes

//Seus colegas pediram que você copiasse alguns papéis para eles. Você sabe que existem 'n' colegas de classe e a papelada tem 'm' páginas.
//Sua tarefa é calcular quantas páginas em branco você precisa. Se n < 0ou m < 0retornar 0.
function paperwork(n,m){
    return n < 0 || m < 0 ? (n - n) * (m - m) : n * m;
}

//Encontre o próximo quadrado perfeito!

//Você deve conhecer alguns quadrados perfeitos bem grandes. Mas e o PRÓXIMO? 
//Complete o findNextSquare método que encontra o próximo quadrado perfeito integral após aquele passado como parâmetro. 
//Lembre-se de que um quadrado perfeito integral é um número inteiro n tal que sqrt(n) também é um número inteiro.
//Se o parâmetro em si não for um quadrado perfeito, -1deverá ser retornado. Você pode assumir que o parâmetro não é negativo.
function findNextSquare(sq){
    let raiz = Math.sqrt(sq);
    return Number.isInteger(raiz) ? (raiz + 1) * (raiz + 1) : -1;
}

//Removendo elementos

//Pegue um array e remova cada segundo elemento do array. Mantenha sempre o primeiro elemento e comece a remover com o próximo elemento.
//["Keep", "Remove", "Keep", "Remove", "Keep", ...]   -->  ["Keep", "Keep", "Keep", ...]
function removeEveryOther(arr){
    for(let i = 0; i < arr.length; i++){
        arr.splice(i + 1, 1);
    }
    return arr;
}

//Corrija os erros do software de reconhecimento de caracteres

//O software de reconhecimento de caracteres é amplamente utilizado para digitalizar textos impressos. Assim os textos podem ser editados, 
//pesquisados ​​e armazenados em um computador. Quando documentos (especialmente os muito antigos escritos com uma máquina de escrever) 
//são digitalizados, os softwares de reconhecimento de caracteres geralmente cometem erros.
//Sua tarefa é corrigir os erros no texto digitalizado. Você só precisa lidar com os seguintes erros:
//S é mal interpretado como 5
//O é mal interpretado como 0
//I é mal interpretado como 1
//Os casos de teste contêm números apenas por engano.
function correct(string){
    return string.replaceAll('0','O').replaceAll('1','I').replaceAll('5','S');
}

//É um palíndromo?

//Escreva uma função que verifique se uma determinada string (sem distinção entre maiúsculas e minúsculas) é um palíndromo .
//Um palíndromo é uma palavra, número, frase ou outra sequência de símbolos que é lida da mesma forma de trás para frente, como madamou racecar.
function isPalindrome(x){
    let arrayString = x.split("");
    let reverseString = arrayString.reverse();
    let newStringInvert = reverseString.join("");
    if(x.toUpperCase() === newStringInvert.toUpperCase()){
        return true;
    } else {
        return false;
    }
}

//Adição Binária

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

//Grasshopper - função de gols de Messi

//Messi é um jogador de futebol com gols em três ligas: LaLiga, Copa do Rei, Campeões
//Complete a função para retornar o número total de gols nas três ligas.
//Nota: a entrada sempre será válida.
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals){
    return (laLigaGoals + copaDelReyGoals + championsLeagueGoals);
}

//Remova o mínimo

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
