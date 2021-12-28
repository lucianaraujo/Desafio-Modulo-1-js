function solucao(jogadores) {
    const filtro = jogadores.filter(x => x.jogada === 1);
    const filtroDoZero = jogadores.filter(x => x.jogada === 0);

    if (filtroDoZero.length > 1 && filtro.length === 1) {
        console.log(filtro[0].nome)
    } else if (filtro.length > 1 && filtroDoZero.length === 1) {
        console.log(filtroDoZero[0].nome)
    } else {
        console.log(`NINGUEM`)
    }
}