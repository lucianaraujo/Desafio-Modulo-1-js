function solucao(lista) {
    const soma = lista.reduce((acc, item) => acc + item);
    const mediaPorDia = soma / lista.length;
    console.log(mediaPorDia);

}