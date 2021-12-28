function processData(input) {

    if (input === input[0].toLowerCase() + input.substr(1).toUpperCase()) {
        console.log(input[0].toUpperCase() + input.substr(1).toLowerCase());
    } else if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    } else {
        console.log(input);
    }
}