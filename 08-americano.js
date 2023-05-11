const numeros = [1, 3, 2, 1]

function solucao(numero) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero
    }
    let posicao = soma % numeros.length

    if (posicao === 0) {
        posicao = numeros.length
        console.log(posicao)
    } else {
        console.log(posicao)
    }
}
solucao(numeros)

