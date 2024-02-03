//Ordem descrescente

//Sua tarefa é criar uma função que possa receber qualquer número inteiro não negativo como argumento e retorná-lo com seus dígitos em ordem decrescente. 
//Essencialmente, reorganize os dígitos para criar o número mais alto possível.g
public class DescendingOrder {
    public static int sortDesc(final Integer num) {
        String[] numsStr = num.toString().split("");

        Arrays.sort(numsStr);
        StringBuilder sortedNums = new StringBuilder();
        
        for(int i = numsStr.length - 1; i > -1; i--) {
            sortedNums.append(numsStr[i]);
        }

        return Integer.parseInt(sortedNums.toString());
    }
}

//Palavras reversas

//Conclua a função que aceita um parâmetro de string e inverte cada palavra da string. Todos os espaços na string devem ser mantidos.
public class Kata {
  public static String reverseWords(final String original) {
    String[] arr = original.split(" ");
     
    if(arr.length == 0)
       return original;
     
    String result = "";
     
    for(String word : arr){
        StringBuilder input = new StringBuilder();
        result += input.append(word).reverse().toString()+" ";
    }

    return result.trim();
  }
}

//Palavra mais curta

//Simples, dada uma sequência de palavras, retorne o comprimento da(s) palavra(s) mais curta(s).
//A string nunca estará vazia e você não precisa levar em conta diferentes tipos de dados.
public class Kata {

    public static int findShort(String input) {
        String[] words = input.split("[\\s]");

        int smallSize = words[0].length();

        for (int i = 1; i < words.length; i++) {
            if (words[i].length() < smallSize) {
                smallSize = words[i].length();
            }
        }

        return smallSize;
    }

}

//Quadrar cada dígito

//Bem-vindo. Neste kata, você deve elevar ao quadrado cada dígito de um número e concatená-los. Por exemplo, se executarmos 9119 
//na função, sairá 811181, porque 9 2 é 81 e 1 2 é 1. (81-1-1-81)
//Exemplo # 2: Uma entrada de 765 retornará/deverá retornar 493625 porque 7 2 é 49, 6 2 é 36 e 5 2 é 25. (49-36-25)
//Nota: A função aceita um número inteiro e retorna um número inteiro.
public class SquareDigit {

    public int squareDigits(int n) {

        Integer wrapperN = n;
        String[] digitsInStr = wrapperN.toString().split("");

        String square = "";
        for (int i = 0; i < digitsInStr.length; i++) {
            square += (Integer.parseInt(digitsInStr[i]) * Integer.parseInt(digitsInStr[i]));
        }
        
        return Integer.parseInt(square);

    }

}

//O maior lucro vence!

//Escreva uma função que retorne o número mínimo e máximo da lista/matriz fornecida.
public class MinMax {
    public static int[] minMax(int[] arr) {
          return new int[] {Arrays.stream(arr).min().getAsInt(), Arrays.stream(arr).max().getAsInt()};
    }
}

//Dois lutadores, um vencedor

//Crie uma função que retorne o nome do vencedor de uma luta entre dois lutadores.
//Cada lutador se reveza atacando o outro e quem matar o outro primeiro é vitorioso. A morte é definida como ter health <= 0.
//Cada lutador será um Fighterobjeto/instância. Veja a classe Fighter abaixo no idioma escolhido.
//Ambos health e damagePerAttack (damage_per_attackpara python) serão números inteiros maiores que 0. Você pode transformar os Fighterobjetos.
//Sua função também recebe um terceiro argumento, uma string, com o nome do lutador que ataca primeiro.
public class Kata {
  
    public static boolean isWinner(Fighter adversary) {
        return adversary.health <= 0;
    }
    
    public static void attack(Fighter attacker, Fighter adversary) {
      adversary.health -= attacker.damagePerAttack;
    }
    
    public static String declareWinner(Fighter fighter1, Fighter fighter2, String firstAttacker) {
      if (firstAttacker.equals(fighter1.name)) {
        while (true) {
          attack(fighter1, fighter2);
          
          if (isWinner(fighter2)) return fighter1.name;
          
          attack(fighter2, fighter1);
          
          if (isWinner(fighter1)) return fighter2.name;
        }
      } else {
          return declareWinner(fighter2, fighter1, firstAttacker);
      }
    }

}

//Erros da Impressora

//Numa fábrica, uma impressora imprime etiquetas para caixas. Para um tipo de caixa a impressora tem que usar cores que, por uma questão de simplicidade, são nomeadas com letras de a to m.
//As cores utilizadas pela impressora são registradas em uma sequência de controle. Por exemplo, uma string de controle "boa" significaria aaabbbbhaijjjmque a impressora usou três vezes a cor a, quatro vezes a cor b, uma vez a cor h e uma vez a cor a...
//Às vezes há problemas: falta de cores, mau funcionamento técnico e uma sequência de controle "ruim" é produzida, por exemplo, aaaxbbbbyyhwawiwjjjwwmcom letras que não são de a to m.
//Você tem que escrever uma função printer_errorque, dada uma string, retornará a taxa de erros da impressora como uma string representando um racional cujo numerador é o número de erros e o denominador o comprimento da string de controle. Não reduza esta fração a uma expressão mais simples.
//A string tem comprimento maior ou igual a um e contém apenas letras de aaté z.
public class Printer {
    
    public static String printerError(String s) {
        char[] chars = s.toCharArray();
        int errors = 0;

        for (char c : chars) {
            if (c > 'm' || c < 'a') errors++;
        }

        return String.format("%d/%d", errors, s.length());
    }
}