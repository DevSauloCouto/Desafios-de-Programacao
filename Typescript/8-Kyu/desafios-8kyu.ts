//Par ou Ímpar - 8 KYU

//Crie uma função que receba um número inteiro como argumento e retorne "Even"para números pares ou "Odd"ímpares.
export function evenOrOdd(n:number):string {
    return (n % 2 == 0) ? "Even" : "Odd";
}

//Quebra de Frase - 8 KYU

//Escreva uma função que pegue um conjunto de palavras e as junte em uma frase e retorne a frase. Você pode ignorar 
//qualquer necessidade de higienizar palavras ou adicionar pontuação, mas deve adicionar espaços entre cada palavra. 
//Cuidado, não deve haver espaço no início ou no final da frase!
export function smash (words: string[]): string {
    return words.join(" ");
};

//Converter uma string em um array - 8 KYU

//Escreva uma função para dividir uma string e convertê-la em um array de palavras.
export function stringToArray(s: string): string[] {
	return s.split(" ");
}

//Iniciante - Perdido sem Mapa - 8 KYU

//Dado um array de inteiros, retorne um novo array com cada valor duplicado.
export function maps(x: number[]): number[]{
    return x.map(val => val * 2);
}

//Desafio All Star Código #18 - 8 KYU

//Crie uma função que aceite uma string e um único caractere, e retorne um número inteiro da contagem de ocorrências em que o 2º argumento
// é encontrado no primeiro.
//Se nenhuma ocorrência for encontrada, uma contagem de 0 deverá ser retornada.
export function strCount(str: string, letter: string): number {
    const arrayStr: string[] = str.split("");
    let result: number = 0;
    arrayStr.forEach(val => {
      (val == letter) ? result++ : result;
    })
    return result;
}

//Transporte nas Férias - 8 KYU

//Depois de um período difícil no escritório, você decide descansar um pouco nas férias. Então você vai reservar um voo para você e sua 
//namorada e tentar deixar toda a bagunça para trás.
//Você precisará de um carro alugado para se locomover em suas férias. O gerente da locadora de veículos faz algumas boas ofertas.
//Cada dia que você aluga o carro custa US$ 40. Se você alugar o carro por 7 ou mais dias, receberá $ 50 de desconto no total. Alternativamente,
//se você alugar o carro por 3 ou mais dias, você receberá $ 20 de desconto no total.
//Escreva um código que forneça o valor total para dias diferentes (d).
export function rentalCarCost(d: number): number {
    // Your solution here
    const value: number = d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
    return value;
}