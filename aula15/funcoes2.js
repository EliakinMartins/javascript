function somaDefinida (n1 =0, n2 =0) {
    return console.log(n1 + n2)                     //com parametro definido =0, não há preocupação de retornar NaN
}


somaDefinida(2, 5)
somaDefinida(2) // Como o parametro foi definido primariamente como "0", é possivel definir apenas 1 numero e n dar erro.