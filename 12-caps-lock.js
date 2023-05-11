const palavra = 'CAPS'

function solucao(palavra) {

    if (palavra === palavra.toUpperCase()) {
        console.log(palavra.toLowerCase());
    } else {
        if (palavra.slice(0, 1) === palavra.slice(0, 1).toLowerCase() &&
            palavra.slice(1) === palavra.slice(1).toUpperCase()) {
            console.log(palavra.slice(0, 1).toUpperCase() + palavra.slice(1).toLowerCase());
        } else {
            console.log(palavra)
        }
    }
}
solucao(palavra)

