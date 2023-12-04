//Grasshopper - Livro de Notas - 8 KYU

//Complete a função para que ela encontre a média das três notas passadas e retorne o valor da letra associada a essa nota.
function getGrade (s1,s2,s3) {
    let media = (s1 + s2 + s3) / 3;
    return (media >= 90 && media <= 100) ? 'A' :
        (media < 90 && media >= 80) ? 'B' :
        (media < 80 && media >= 70) ? 'C' :
        (media < 70 && media >= 60) ? 'D' : 'F';
}

//Analise o bom int do problema de char - 8 KYU

//Você pergunta a uma menina: "Quantos anos você tem?" Ela sempre diz “x anos”, onde x é um número aleatório entre 0 e 9.
//Escreva um programa que retorne a idade da menina (0-9) como um número inteiro.
//Suponha que a sequência de entrada do teste seja sempre uma sequência válida. 
//Por exemplo, a entrada de teste pode ser “1 ano” ou “5 anos”. O primeiro caractere da string é sempre um número.
function getAge(inputString){
    return parseInt(inputString.substring(0,1));
}

//Contando ovelhas... - 8 KYU

//Considere uma matriz/lista de ovelhas onde algumas ovelhas podem estar faltando em seu lugar. 
//Precisamos de uma função que conte o número de ovelhas presentes no array (verdadeiro significa presente).
function countSheeps(arrayOfSheep){
    let test = arrayOfSheep.filter((num) => num == true);
    return test.length;
}

//Haverá espaço suficiente? - 8 KYU

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

//Retorno negativo - 8 KYU

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

//Converta um número em uma string! - 8 KYU

//Precisamos de uma função que possa transformar um número (inteiro) em uma string.
function numberToString(num){
    let str = "";
    return str += num;
}

//Função 1 - olá mundo - 8 KYU

//Faça uma função simples chamada greetque retorne o mais famoso "olá mundo!".
function greet(){
    return "hello world!";
}

//Pedra, Papel, Tesoura! - 8 KYU

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

//Você não pode codificar sob pressão - 8 KYU

//Codifique o mais rápido que puder! Você precisa dobrar o número inteiro e retorná-lo
function doubleInteger(i) {
    return i * 2;
}

//Você está tocando banjo? - 8 KYU

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

//Século do ano - 8 KYU

//O primeiro século abrange do ano 1 até o ano 100 inclusive , o segundo século - do ano 101 até o ano 200 inclusive , etc.
//Tarefa: Dado um ano, retorne o século em que ele se encontra.
function century(year,seculo){
    seculo = year / 100;
    return Math.ceil(seculo);

}

//Converter um booleano em uma string - 8 KYU

//Implemente uma função que converta o valor booleano fornecido em sua representação de string.
function booleanToString(b){
    if(b == true){
      return "true";
    } else {
      return "false";
    }
}

//CASO ALTERNATIVO <=> CASO ALTERNATIVO - 8 KYU

//Defina String.prototype.toAlternatingCase(ou uma função/método semelhante, como to_alternating_case // 
//no idioma selecionado; consulte a solução inicial para obter detalhes toAlternatingCase ) de forma que 
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

//Conversão de DNA para RNA - 8 KYU

//Ácido desoxirribonucléico, DNA é a principal molécula de armazenamento de informações em sistemas biológicos.
//É composto por quatro bases de ácidos nucleicos Guanina ('G'), Citosina ('C'), Adenina ('A') e Timina ('T').
//O ácido ribonucleico, RNA, é a principal molécula mensageira nas células. O RNA difere ligeiramente do DNA em sua
//estrutura química e não contém timina. No RNA, a timina é substituída por outro ácido nucleico, uracila ('U').
//Crie uma função que traduza uma determinada sequência de DNA em RNA.
function DNAtoRNA(dna){
    return dna.replaceAll("T", "U");
}

//Relógio Série Iniciante #2 - 8 KYU

//O relógio mostra hhoras, mminutos e ssegundos depois da meia-noite.
//Sua tarefa é escrever uma função que retorne o tempo desde a meia-noite em milissegundos.
function past(h,m,s){
    segundos = s * 1000;
    minutes = m * 60000;
    hours = h * 3600000;
    return segundos + minutes + hours;
}

//Trimestre do ano - 8 KYU

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

//Eu te amo, um pouco, muito, apaixonadamente... de jeito nenhum - 8 KYU

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

//Mantenha-se hidratado! - 8 KYU

//Nathan adora andar de bicicleta.
//Como Nathan sabe que é importante manter-se hidratado, ele bebe 0,5 litro de água por hora de ciclismo.
//Você recebe o tempo em horas e precisa retornar a quantidade de litros que Nathan irá beber, arredondado para o menor valor.
function litres(time){
    return Math.floor(time / 2);
}

//Retornando Strings - 8 KYU
 
//Faça uma função que retornará uma instrução de saudação que usa uma entrada; seu programa deve retornar, 
//"Hello, <name> how are you doing today?".
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

//Documentação escolar n1 da série para iniciantes - 8 KYU

//Seus colegas pediram que você copiasse alguns papéis para eles. Você sabe que existem 'n' colegas de classe e a papelada tem 'm' páginas.
//Sua tarefa é calcular quantas páginas em branco você precisa. Se n < 0ou m < 0retornar 0.
function paperwork(n,m){
    return n < 0 || m < 0 ? (n - n) * (m - m) : n * m;
}

//Removendo elementos - 8 KYU

//Pegue um array e remova cada segundo elemento do array. Mantenha sempre o primeiro elemento e comece a remover com o próximo elemento.
//["Keep", "Remove", "Keep", "Remove", "Keep", ...]   -->  ["Keep", "Keep", "Keep", ...]
function removeEveryOther(arr){
    for(let i = 0; i < arr.length; i++){
        arr.splice(i + 1, 1);
    }
    return arr;
}

//Corrija os erros do software de reconhecimento de caracteres - 8 KYU

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

//É um palíndromo? - 8 KYU

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

//Grasshopper - função de gols de Messi - 8 KYU

//Messi é um jogador de futebol com gols em três ligas: LaLiga, Copa do Rei, Campeões
//Complete a função para retornar o número total de gols nas três ligas.
//Nota: a entrada sempre será válida.
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals){
    return (laLigaGoals + copaDelReyGoals + championsLeagueGoals);
}

//Depurar dizer Olá - 8 KYU

//A nave Enterprise encontrou alguns problemas ao criar um programa para cumprimentar a todos quando eles embarcassem. É sua função consertar
//o código e fazer o programa funcionar novamente!
const sayHello = (name) => `Hello, ${name}`;

//Iniciante - Reduza, mas cresça - 8 KYU

//Dada uma matriz não vazia de inteiros, retorne o resultado da multiplicação dos valores em ordem..
function grow(x){
    let result = 1;
    for(let i = 0; i < x.length; i++){
        result *= x[i];
    }
    return result;
}

//Você vai conseguir? - 8 KYU

//Você estava acampando com seus amigos longe de casa, mas quando chega a hora de voltar, você percebe que seu combustível está acabando e a 
//bomba mais próxima está a 50km de distância! Você sabe que, em média, seu carro roda cerca de 25km por galão. Restam 2 galões.
//Considerando esses fatores escreva uma função que diga se é possível chegar até a bomba ou não.
//A função deve retornar true se for possível e false se não.
const zeroFuel = (distance, media, gallons) => {
    return media * gallons < distance ? false : true;
}

//Diferença de volume de cubóides - 8 KYU

//Neste exercício simples, você criará um programa que receba 2 listas de inteiros a e b. Cada lista consistirá em 3 números inteiros positivos
//acima de 0, representando as dimensões dos cubóides a e b. Você deve encontrar a diferença entre os volumes dos cubóides, independentemente
//de qual for maior.
function findDifference(a, b) {
    const res = (a.reduce((result, element) => result * element, 1) - b.reduce((result2, element2) => result2 * element2, 1));
    return res < 0 ? res * -1 : res;
}

//Função 2 - Quadratura de um argumento - 8 KYU

//Agora você tem que escrever uma função que receba um argumento e retorne o quadrado dele.
const square = (x) => x * x;

//Ordem reversa da lista - 8 KYU

//Neste kata você criará uma função que recebe uma lista e retorna uma lista na ordem inversa.
function reverseList(list){
    return list.reverse();
}

//Operações Matemáticas Básicas - 8 KYU

//Sua tarefa é criar uma função que execute quatro operações matemáticas básicas.
//A função deve receber três argumentos - operação(string/char), valor1(número), valor2(número).
//A função deve retornar resultado de números após aplicar a operação escolhida.
function basicOp(operation, value1, value2){
    if(operation == '+') return value1 + value2;
    if(operation == '-') return value1 - value2;
    if(operation == '*') return value1 * value2;
    if(operation == '/') return value1 / value2;
    else return "Operação Inválida";
}

//Soma de matriz mista - 8 KYU

//Dado um array de inteiros como strings e números, retorne a soma dos valores do array como se todos fossem números.
//Retorne sua resposta como um número.
function sumMix(x){
    const number = 0;
    const result = x.reduce((acc, val) => +acc + +val, number);
    return result;
}

//Soma Quadrada(n) - 8 KYU

//Complete a função de soma quadrada de modo que eleve ao quadrado cada número passado para ela e, em seguida, some os resultados.
//Por exemplo, for [1, 2, 2]deve retornar 9 porque 1^2 + 2^2 + 2^2 = 9
function squareSum(numbers){
    return numbers.reduce((acc, value) => acc + (value * value), 0);
}

//Cordas invertidas - 8 KYU

//Complete a solução para que ela inverta a string passada para ela.
function solution(str){
    return str.split("").reverse().join("");
}

//Uma agulha no palheiro - 8 KYU

//Você consegue encontrar a agulha no palheiro?
//Escreva uma função findNeedle() que receba um array monte de lixo, mas que contenha um "needle"
//Depois que sua função encontrar a agulha ela deverá retornar uma mensagem (como uma string) que diz:
//"found the needle at position "mais o index que encontrou a agulha, então:
function findNeedle(haystack) {
    const indice = haystack.indexOf("needle");
    return `found the needle at position ${indice}`
}

//Removendo espaços de string - 8 KYU

//Escreva uma função que remova os espaços da string e retorne a string resultante.
function noSpace(x){
    const result = x.match(/\S/g).join("");
    return result;
}
