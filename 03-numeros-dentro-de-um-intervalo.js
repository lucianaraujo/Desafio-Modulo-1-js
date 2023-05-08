function solucao(numero, limiteInferior, limiteSuperior) {
    if (numero > limiteSuperior) {
        console.log("NÃO PERTENCE");

    } if (numero < limiteInferior) {
        console.log("NÃO PERTENCE")
    } else {
        console.log("PERTENCE")
    }
}
solucao(21, 5, 20)