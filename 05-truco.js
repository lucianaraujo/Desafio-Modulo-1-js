
function solucao(carta) {
    const cartaPraCima = ["Q", "J", "K", "A", "2", "3"];
    const indice = cartaPraCima.indexOf(carta)
    const proximaCarta = (indice + 1) % cartaPraCima.length
    const manilha = [proximaCarta]
    console.log(cartaPraCima[manilha])
}

solucao("J")