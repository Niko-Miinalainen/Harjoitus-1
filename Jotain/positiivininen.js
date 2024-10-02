function tarkista(){
    let numero = document.getElementById("numero").value
    if (numero >= 0){
        document.write(numero + " on positiivinen")
    }
    else {
        document.write(numero + " on negatiivinen")
    }
}