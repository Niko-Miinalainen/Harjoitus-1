function muuta(){
    var salasana = document.getElementById("salasana").value;
    var muuttaja = "<p>"
    for(i = 0; i < salasana.length; i++){
        muuttaja += salasana[i] + "Ö";
    }
    muuttaja += "<p>";
    document.getElementById("sana").innerHTML = muuttaja;

}