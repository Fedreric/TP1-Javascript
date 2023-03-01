let num = +prompt('Ingresa un numero');
let arrayDivisores = [2,3,5,7];
let divisibles = '';

if (!isNaN(num && num !== 0)) {
    for (let i = 0; i < arrayDivisores.length; i++) {
        if (num % arrayDivisores[i] === 0) {
            divisibles += arrayDivisores[i] + ' ';
        }
    }
    if(parseInt(divisibles) > 0){
        document.write(`${num} Es divibles por estos numeros: ${divisibles}`);
    }else{
        document.write(`${num} NO es divibles por ninguno de estos numeros: 2, 3, 5 o 7`);
    }
}else{
    document.write(`Ingresa un valor NUMERICO porfavor! :D`);
}

console.log('210 y 420 son numeros divisibles en 2,3,5 y 7, perfectos para probar este ejemplo.');