function onko(){
    var sana = document.getElementById("sana").value;
    var vastaus = "Ei ole";
    for(var i = 0; i < sana.length; i++){

        if(sana[i] == "ö" || sana[i] == "Ö"){
            vastaus = "On";
        }

    }
    document.getElementById("vastaus").innerHTML = "<p>" + vastaus + "</p>";
}