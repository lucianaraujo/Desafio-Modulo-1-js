function solucao(min, max, valores) {
    let valoresPermitidos = [];
    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            valoresPermitidos.push(valor);
        }
    }
    console.log(valoresPermitidos)
}

let min = 2
let max = 10
const valores = [0, 5, 6, 10, 11];

solucao(min, max, valores)