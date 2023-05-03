function solucao(min, km) {

    let somaTempo = 50 * min
    let somaDistancia = 70 * km

    if (min <= 20) {
        somaTempo = 50 * min
    } else {
        somaTempo = (50 * 20) + (30 * (min - 20))
    }
    if (km <= 10) {
        somaDistancia = 70 * km
    } else {
        somaDistancia = (70 * 10) + (50 * (km - 10))
    }
    let valorTotal = somaTempo + somaDistancia
    console.log(valorTotal)
}
solucao(25, 11.5)