function tarkista(){
    let numero = document.getElementById("päivä").value
    if (numero == 1){
        document.write("Maanantai")
    }
    else if (numero == 2){
        document.write("Tiistai")
    }
    else if (numero == 3){
        document.write("Keskiviikko")
    }
    else if (numero == 4){
        document.write("Torstai")
    }
    else if (numero == 5){
        document.write("Perjantai")
    }
    else if (numero == 6){
        document.write("Lauantai")
    }
    else if (numero == 7){
        document.write("Sunnuntai")
    }
    else if (numero > 7){
        document.write("Numero ei ole 1-7")
    }

}