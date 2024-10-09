function laske(){

    var pisteet = 0
    var sana = document.getElementById("sana").value
    for (var i = 0; i < sana.length; i++){

        switch (sana[i]){
        
            case "q":
            case "w":
            case "e":
            case "r":
            case "t":
            case "y":
                pisteet++
                break;
            case "u":
            case "i":
            case "o":
            case "p":
            case "å":
            case "a":
                pisteet +=2
                break;
            case "s":
            case "d":
            case "f":
            case "g":
            case "h":
            case "j":
                pisteet +=3
                break;
            case "k":
            case "l":
            case "ö":
            case "ä":
            case "z":
            case "x":
                pisteet +=4
                break;
            case "c":
            case "v":
            case "b":
            case "n":
            case "m":
                pisteet +=5
                break;
            default:
                pisteet +=14;

        }
        document.getElementById('scrabble').innerHTML = "<p>Sanan " + sana + " pisteet ovat: " + pisteet + "</p>";
    }


}