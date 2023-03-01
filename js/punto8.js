let numero = +prompt('Dame un numero');

// console.log(typeof(numero1));
if (!isNaN(numero)) {
    if(numero % 2 === 0){
        document.write(`${numero} SI es un numero divisible en 2`)
    }else{
        document.write(`${numero} NO es un numero divisible en 2`)
    }
}else{
    alert(`Por favor ingresa un numero! :D`);
}