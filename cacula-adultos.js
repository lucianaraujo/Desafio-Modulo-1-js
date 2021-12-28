function solucao(lista) {
    const temMaiorDe18 = lista.some(x => x >= 18);
    const maiorDe18 = lista.filter(x => x >= 18);

    if (temMaiorDe18) {
        console.log(maiorDe18.reduce((a, b) => Math.min(a, b)));
    } else {
        console.log(`CRESCA E APARECA`)
    };
};