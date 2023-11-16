//Converta valores booleanos em strings 'Sim' ou 'Não' - 8 KYU

//Conclua o método que recebe um valor booleano e retorna uma "Yes"string para trueou uma "No"string para false.
#include <stdbool.h>

const char *bool_to_word (bool value)
{
    return value == true ? "Yes" : "No";
}