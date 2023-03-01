let numero1 = +prompt('Dame un numero');
;let numero2 = +prompt('Dame otro numero');
;let numero3 = +prompt('Dame otro numero');

if (!isNaN(numero1 && numero2 && numero3)){
    if(numero1 > numero2 && numero1 > numero3){
        document.write(`${numero1} es el mayor: (${numero1}, ${numero2}, ${numero3})`)
    }else if(numero2 > numero1 && numero2 > numero3){
        document.write(`${numero2} es el mayor: (${numero1}, ${numero2}, ${numero3})`)
    }else{
        document.write(`${numero3} es el mayor: (${numero1}, ${numero2}, ${numero3})`)
    }
}else{
    alert('Los 3 datos ingresados deben ser NUMERICOS!');
}
