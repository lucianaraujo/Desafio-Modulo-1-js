function solucao(numeros) {
    const somaNumeros = numeros.reduce((a, b) => a + b);
    let sorteio = somaNumeros % numeros.length;

    if (sorteio === 0) {
        console.log(numeros.length);
    } else {
        console.log(sorteio);
    }
}