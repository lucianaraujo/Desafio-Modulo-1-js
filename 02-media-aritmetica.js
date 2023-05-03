
function solucao(lista) {
    const soma = lista.reduce((acumulador, elementoAtual) => {
        return acumulador + elementoAtual;
    })
    const media = Math.ceil(soma / lista.length)
    console.log(media)
}
solucao(lista)