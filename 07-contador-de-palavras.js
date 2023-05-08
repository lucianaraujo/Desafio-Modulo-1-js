function solucao(texto) {
    const palavras = texto.split(" ");
    const array = [];
    for (let palavra of palavras) {
        if (palavra !== '') {
            array.push(palavra);
        }
    }
    const totalDePalavras = array.length;
    console.log(totalDePalavras);
}
solucao(texto)