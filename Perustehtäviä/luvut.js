function luvut(){

    var luku = document.getElementById("luku").value;
    var jono = "<p>";
    for(var i = 2; i <= luku; i = i+2){
        jono += i;
        jono +=" ";
    }
    jono += "<p>";
        document.getElementById("parilliset").innerHTML = jono;
}