//REMOVEDOR DE VOGAIS - 8 KYU

//Crie uma função chamada shortcut para remover as vogais minúsculas (a, e, i, o, u) em uma determinada string.

import java.util.Arrays;

public class Kata {
    public static String shortcut(String input) {
      String newInput = input.replaceAll("[aeiou]", "");
      return newInput;
    }
}

//PLURAL - 8 KYU

//Precisamos de uma função simples que determine se o plural é necessário ou não. Deve receber um número e retornar verdadeiro se um plural 
//for usado com esse número ou falso se não. Isso seria útil ao imprimir uma string como 5 minutes, 14 apples ou 1 sun.
//Você só precisa se preocupar com as regras gramaticais do inglês para este kata, onde qualquer coisa que não seja singular (um de algo), 
//é plural (não um de algo).
//Todos os valores serão números inteiros positivos ou flutuantes ou zero.
public class Plural{
    public static boolean isPlural(float f){
        return (f == 1.0) ? false : true;
    }
}

//Grasshopper - Fixador de funções básicas - 8 KYU

//Criei esta função para adicionar cinco a qualquer número passado e retornar o novo valor. Não gera nenhum erro, mas retorna o número errado.
//Você pode me ajudar a consertar a função?
public class Solution {
    public static int addFive(int num) {
        return num + 5;
    }
}

//Você só precisa de um - Iniciante - 8 KYU

//Você receberá um array ae um valor x. Tudo que você precisa fazer é verificar se o array fornecido contém o valor.
//A matriz pode conter números ou strings. X pode ser qualquer um dos dois.
//Retorne true se a matriz contém o valor, false caso contrário.
public class Solution {

    public static boolean check(Object[] a, Object x) {
        for(int i = 0; i < a.length; i++){
          if(a[i] == x) return true; 
        }
        return false;
    }

}

//MakeUpperCase - 8 KYU

//Escreva uma função que converta a string de entrada em maiúsculas.
class Upper{
    public static String MakeUpperCase(String str){
        return str.toUpperCase();
    }
}

//Volume de um cubóide - 8 KYU

//Bob precisa de uma maneira rápida de calcular o volume de um paralelepípedo com três valores: o e length do paralelepípedo. 
//Escreva uma função para ajudar Bob nesse cálculo. width height
public class Kata {

    public static double getVolumeOfCuboid(final double length, final double width, final double height) { 
        double volume = length * width * height;
        return volume;
    }
  
}

//Encontre múltiplos de um número - 8 KYU

//Neste exercício simples, você construirá um programa que recebe um valor, integer e retorna uma lista de seus múltiplos até 
//outro valor limit. Se limit for um múltiplo de integer, também deverá ser incluído. Só serão passados ​​números inteiros positivos 
//para a função, não consistindo em 0. O limite sempre será maior que a base.
//Por exemplo, se os parâmetros passados ​​forem (2, 6), a função deverá retornar [2, 4, 6] como 2, 4 e 6 são múltiplos de 2 até 6.
public class Multiples {
    public static int[] find(int base, int limit) {
        int[] arr = new int[limit / base];
        for(int i = 0; i < limit; i++){
            if(base * (i + 1) > limit){
              break;
            } 
            arr[i] = base * (i + 1);
        }
        return arr;
    }
}

//Gafanhoto - Verifique o fator

//Esta função deve testar se factoré um fator de base. Retorne true se for um fator ou false se não for.
public class Kata() {
    public static boolean checkForFactor(int base, int factor) {
        return base % factor == 0;
    }
}

//Operador lógico "ou" (XOR) exclusivo

//Em algumas linguagens de script como PHP, existe um operador lógico (por exemplo &&, ||, and, or, , etc.) chamado "Or Exclusivo" 
//(daí o nome deste Kata). O exclusivo or avalia dois booleanos. Em seguida, ele retorna truese exatamente uma das duas expressões for true, 
//false caso contrário. 
public class XOR {
    public static boolean xor(boolean a, boolean b) {
        return a != b;
    }
}

//Gafanhoto - Mensagem Personalizada

//Crie uma função que forneça uma saudação personalizada. Esta função leva dois parâmetros: namee owner.
public class Kata {
    public static String greet(String name, String owner) {
        return name.equals(owner) ? "Hello boss" : "Hello guest";
    }
}

//Abrevie um nome de duas palavras

//Escreva uma função para converter um nome em iniciais. Este kata utiliza estritamente duas palavras com um espaço entre elas.
//A saída deve ser duas letras maiúsculas com um ponto separando-as.
public class AbbreviateTwoWords {
    public static String abbrevName(String name) {
        String[] nameSplit = name.split("[\\s]");

        Object[] firstLetter = Arrays.stream(nameSplit).map(str -> str.substring(0, 1).toUpperCase()).toArray();

        return String.format("%s.%s", (String) firstLetter[0], (String) firstLetter[1]);
    }
}

//Gafanhoto - Soma

//Escreva um programa que encontre a soma de todos os números de 1 a num. O número sempre será um número inteiro positivo maior que 0. 
//Sua função só precisa retornar o resultado, o que é mostrado entre parênteses no exemplo abaixo é como você chega a esse resultado e 
//não faz parte dele, veja os exemplos de testes.
public class GrassHopper {
    public static int summation(int n) {
        int result = 0;
        
        for (int i = 1; i <= n; i++) {
            result += i;
        }
        return result;
    }
}

//Bin to Decimal

//Complete a função que converte um número binário (fornecido como uma string) em um número decimal.
public class Converter {

    public static int binToDecimal(String input) {
        //Reverse string to convert
        StringBuilder inputReverse = new StringBuilder(input);
        inputReverse.reverse();

        String[] chars = inputReverse.toString().split("");

        //Mapping bits
        Map<Integer, String> mapBit = new HashMap<>();
      
        //Mapping first bit  
        mapBit.put(1, chars[0]);

        Integer decimal = 0;

        if (mapBit.get(1).equals("1")) {
            decimal += 1;
        }

        Integer multiplier = 2;
        
        //Mapping the rest of the bits 
        for (int i = 1; i < chars.length; i++) {
            mapBit.put(multiplier, chars[i]);

            if (mapBit.get(multiplier).equals("1")) {
                decimal += multiplier;
            }

            multiplier *= 2;
        }

        return decimal;
    }
}

//Inverter valores

//Dado um conjunto de números, retorne o inverso aditivo de cada um. Cada positivo torna-se negativo e os negativos tornam-se positivos.
public class Kata {
    public static int[] invert(int[] array) {
        for (int i = 0; i < array.length; i++) {
          array[i] = array[i] * -1;
        }
        
        return array;
    }
}

//Obter caracteres do valor ASCII

//Escreva uma função que receba um número e retorne o caracter ASCII correspondente para esse valor.
public class Ascii {
    public static char getChar(int c) {
      return (char) c;
    }
}