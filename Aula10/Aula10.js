function somaNumeros(n1,n2){
    return console.log('resultado', n1+n2)
}

somaNumeros(2, 3)
somaNumeros(50, 13)

function calculamedia (nomeAluno, nota1, nota2, nota3){
    let resultado = (nota1 + nota2 + nota3)/3
    return console.log('a nota do aluno', nomeAluno,
    'é', resultado.toFixed(2))
}

calculamedia('Leonardo', 2.5, 10.0, 6.0)
const decideNumero = (numero) => {
    if(numero >= 6){
        return console.log('o numero', numero, 'é maior que 6')
    }else{
        return console.log('o numero', numero, 'é menor que 6')
    }
}
decideNumero(4)
decideNumero(15)
let numeroDeFora = 15
decideNumero(numeroDeFora)