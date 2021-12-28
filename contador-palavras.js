function solucao(texto) {
    const textoFormatadoEmArray = texto.split(" ");
    const novoArray = [];
    for (palavra of textoFormatadoEmArray) {
        if (palavra !== '') {
            novoArray.push(palavra);
        }
    }
    const tamanhoTexto = novoArray.length;
    console.log(tamanhoTexto);
}