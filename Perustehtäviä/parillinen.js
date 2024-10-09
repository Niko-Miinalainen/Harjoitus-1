function parillinen(){
    let numero = document.getElementById("numero").value
    document.write("Antamasi numero: " + numero)
    if (numero%2 == 0){
        document.write(" on parillinen")
    }
    else{
        document.write(" on pariton")
    }
}