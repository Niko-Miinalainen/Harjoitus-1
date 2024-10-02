function käännä(){
    let kieli = document.getElementById("kieli").value
    if (kieli == "suo"){
        document.write("Terve")
    }
    else if (kieli == "eng"){
        document.write("Hello")
    }
    else{
        document.write("Hola")
    }
}