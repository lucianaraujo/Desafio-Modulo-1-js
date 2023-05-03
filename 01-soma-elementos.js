const lista = [1, 2, 3, 4]

function solucao(lista) {
    let soma = 0
    for (let numero of lista) {
        soma = soma + numero
    }
    console.log(soma)
}

solucao(lista)