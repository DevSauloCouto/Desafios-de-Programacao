//REMOVEDOR DE VOGAIS - 8 KYU

//Crie uma função chamada shortcut para remover as vogais minúsculas (a, e, i, o, u) em uma determinada string.

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