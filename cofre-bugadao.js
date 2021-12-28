function processData(input) {
    const formataInput = input.trim().split("\n");
    const senha = formataInput[0].split("");
    const tentativa = formataInput[1].split("");
    let letrasEncontradas = [];
    let ultimoIndex = 0;

    for (let index = 0; index < senha.length; index++) {
        const letraSenha = senha[index];

        for (let index2 = 0; index2 < tentativa.length; index2++) {
            const letraTentativa = tentativa[index2];

            if (letraSenha === letraTentativa && index2 >= ultimoIndex) {
                letrasEncontradas.push(letraTentativa);
                ultimoIndex = index2;
                break;
            }
        }
    }

    if (senha.length === letrasEncontradas.length) {
        console.log(`SIM`)
    } else {
        console.log(`NAO`)
    }
}