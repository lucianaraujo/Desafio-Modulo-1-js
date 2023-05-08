const lista = [2, 3, 4]


function solucao(lista) {
    const soma = lista.reduce((acumulador, elementoAtual) => {
        return acumulador + elementoAtual
    })

    const media = soma / lista.length
    console.log(media)
}
solucao(lista)