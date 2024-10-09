function etsiSuurin()
{
    const array = []

    array[0] = document.getElementById("yksi").value
    array[1] = document.getElementById("kaksi").value
    array[2] = document.getElementById("kolme").value
    array[3] = document.getElementById("neljä").value
    array[4] = document.getElementById("viisi").value

    let suurin = Math.max(array[0],array[1],array[2],array[3],array[4])
    document.write("Annoit luvut: " + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + array[4] + " ja niistä suurin on " + suurin)

    event.preventDefault
}