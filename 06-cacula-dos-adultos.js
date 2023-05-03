function solucao(lista) {
    const maioresDeIdade = lista.filter((idades) => {
        return idades >= 18
    })
    if (maioresDeIdade.length === 0) {
        console.log("creca e apareca")
    } else {
        let menorIdade = Math.min(...maioresDeIdade)
        console.log(menorIdade)
    }
}
solucao(lista)