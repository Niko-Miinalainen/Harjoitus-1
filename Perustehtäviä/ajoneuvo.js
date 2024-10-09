function ajoneuvo(){

    let ikä = document.getElementById("ikä").value
    if(ikä < 16){
        document.write("Ajoneuvosi on polkupyörä")
    }
    else if (ikä < 18){
        document.write("Ajoneuvosi on mopo")
    }
    else{
        document.write("Ajoneuvosi on auto")
    }
}