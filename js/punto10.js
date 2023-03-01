let num = +prompt('Ingresa un numero');

if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    document.write(`${num} Es divibles por alguno de estos numeros: 2, 3, 5 o 7`);
}else{
    document.write(`${num} NO es divibles por ninguno de estos numeros: 2, 3, 5 o 7`);
}