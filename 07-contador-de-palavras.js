function solucao(texto) {
    const textoSemEspacos = texto.trim()
    const textoLimpo = textoSemEspacos.replace(/\s+/g, " ")
    const array = textoLimpo.split(" ")
    const totalDePalavras = array.length
    console.log(totalDePalavras)
}

solucao(texto)
