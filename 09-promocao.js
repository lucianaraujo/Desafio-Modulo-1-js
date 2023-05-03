function solucao(precos) {
    let soma = 0;
    for (let preco of precos) {
        soma += preco;
    }

    if (precos.length >= 3) {
        let menorPreco = Math.min(...precos)
        soma = soma - (menorPreco / 2)
        console.log(soma)
    } else {
        console.log(soma)
    }
}
solucao(precos)