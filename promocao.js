function solucao(precos) {
    let total = precos.reduce((acc, item) => item + acc);
    let menorPreco = precos.reduce((a, b) => Math.min(a, b));

    if (precos.length < 3) {
        console.log(total);
    } else {
        console.log(total - menorPreco / 2);
    }
}