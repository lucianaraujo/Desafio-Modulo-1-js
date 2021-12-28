function solucao(min, max, valores) {
    const novoArray = valores.filter(x => x >= min && x <= max);
    console.log(novoArray);
}
