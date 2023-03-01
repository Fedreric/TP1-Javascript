let numero1 = +prompt('Dame un numero');
let numero2 = +prompt('Dame otro numero');

// console.log(typeof(numero1));
if (!isNaN(numero1 && numero2)) {
    if(numero1 > numero2){
        document.write(`${numero1} es mayor que ${numero2}`)
    }else if(numero1 === numero2){
        document.write(`${numero1} es igual que ${numero2}`)
    }else{
        document.write(`${numero2} es mayor que ${numero1}`)
    }
}else{
    alert('Ambos datos ingresados deben ser NUMERICOS!');
}

