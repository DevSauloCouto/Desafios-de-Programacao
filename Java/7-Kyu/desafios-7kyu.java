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