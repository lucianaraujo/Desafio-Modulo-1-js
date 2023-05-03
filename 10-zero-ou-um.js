function solucao(jogadores) {
    let jogadas0 = [];
    let jogadas1 = [];

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].jogada == 0) {
            jogadas0.push(jogadores[i])
        } else if (jogadores[i].jogada == 1) {
            jogadas1.push(jogadores[i])
        }
    }
    if (jogadas0.length == 1) {
        console.log(jogadas0[0].nome)
    } else if (jogadas1.length == 1) {
        console.log(jogadas1[0].nome)
    } else {
        console.log("NINGUEM")
    }
}
solucao(jogadores)