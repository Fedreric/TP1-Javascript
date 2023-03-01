let frase = prompt('Escribe una frase, te dire cuantas vocales tiene! :D');
let contador = 0;
let vocales = '';

for (let i = 0; i < frase.length; i++){
    if(frase.charAt(i) == 'a' || frase.charAt(i) == 'e' || frase.charAt(i) == 'i' || frase.charAt(i) == 'o' || frase.charAt(i) == 'u' || frase.charAt(i) == 'A' || frase.charAt(i) == 'E' || frase.charAt(i) == 'I' || frase.charAt(i) == 'O' || frase.charAt(i) == 'U'){
        vocales += frase.charAt(i);
        contador++;
    }
}

document.write(`${frase} tiene ${contador} vocales y son ${vocales}`);