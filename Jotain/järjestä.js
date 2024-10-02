function järjestä(){
    const array = []
    array[0] = document.getElementById("eka").value
    array[1] = document.getElementById("toka").value
    array[2] = document.getElementById("kolmas").value
    array.sort()
    document.write("Lukujen järjestys on " + array[0] + " " + array[1] + " " + array[2])
    event.preventDefault

}