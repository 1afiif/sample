// Date of solution 2022.02.09

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map((c) => c.charCodeAt() - 64)
        .join(' ');
}

console.log(alphabetPosition('Hello World is not enough for us '));