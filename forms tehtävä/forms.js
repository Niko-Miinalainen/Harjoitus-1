function tarkista(){

    let etuNimi = document.getElementById("nimi").value
    let sukuNimi = document.getElementById("snimi").value
    let osoite = document.getElementById("osoite").value
    let postiNum = document.getElementById("posti").value
    let kaupunki = document.getElementById("kaupunki").value
    let puhelin = document.getElementById("puhelin").value

    if (etuNimi.trim() == ""){
        alert("Etunimi puuttuu")
    }
    else if (sukuNimi.trim() == ""){
        alert("Sukinimi puuttuu")
    }
    else if (osoite.trim() == ""){
        alert("Osoite puuttuu")
    }
    else if (postiNum.trim() == ""){
        alert("Postinumero puuttuu")
    }
    else if (kaupunki.trim() == ""){
        alert("Kaupunki puutuu")
    }
    else if (puhelin.trim() == ""){
        alert("Puhelin numero puutuu")
    }
    else{
        alert("Tiedot lähetetty")
    }

    event.preventDefault()

}