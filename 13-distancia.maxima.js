const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7"

function solucao(input) {
    const novoInput = input.trim().split('\n')

    let coordenadasX = []
    let coordenadasY = []
    for (let i = 1; i < novoInput.length; i++) {
        const coordInput = novoInput[i].split(' ')
        coordenadasX.push(coordInput[0])
        coordenadasY.push(coordInput[1])
    }
    let i = 0
    let j = 0
    let distancia = 0
    while (i < coordenadasX.length && j < coordenadasY.length) {
        distancia = ((coordenadasX[i] - coordenadasY[j]) ** 2)
    }

    console.log(coordenadasX)
    console.log(coordenadasY)
}

solucao(input)

