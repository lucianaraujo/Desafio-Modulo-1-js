function solucao(input) {
    const senha = input.trim().split("\n")
    const senhaCerta = senha[0].split("")
    const senhaDigitada = senha[1].split("")

    let i = 0
    let n = 0

    while (i < senhaCerta.length && n < senhaDigitada.length) {
        if (senhaCerta[i] === senhaDigitada[n]) {
            i++
        } else {
            n++
        }
    }
    if (i === senhaCerta.length) {
        console.log("sim")
    } else {
        console.log("nao")
    }
}
solucao('cubos', 'cugbyoos')
