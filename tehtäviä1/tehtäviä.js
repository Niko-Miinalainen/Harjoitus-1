// Perus harjoituksia
console.log("Eka tehtävä")
console.log("Hei Maailma")
console.log("-----------------------------------------------------------------------------------")
console.log("Toka tehtävä")
function Laske(num1, num2){
    summa = num1 + num2
    console.log(summa)
}
Laske(68, 44)
console.log("-----------------------------------------------------------------------------------")
console.log("Kolmas tehtävä")
function Ero(num1, num2){
    summa = num1 - num2
    console.log(summa)
}
Ero(68, 44)
console.log("-----------------------------------------------------------------------------------")
console.log("Neljäs tehtävä")
function Kerto(num1, num2){
    summa = num1 * num2
    console.log(summa)
}
Kerto(68, 44)
console.log("-----------------------------------------------------------------------------------")
console.log("Viides tehtävä")
function Jako(num1, num2){
    summa = num1 / num2
    console.log(summa)
}
Jako(68, 44)
console.log("-----------------------------------------------------------------------------------")
console.log("Kuudes tehtävä")
var cel, fahr;
cel = 23
fahr = cel * 9 / 5 +32;
console.log(fahr)
console.log("-----------------------------------------------------------------------------------")
console.log("Seitsemäs tehtävä")
var cel, fahr;
fahr = 23
cel = (fahr-32) * 5 / 9;
console.log(cel)
console.log("-----------------------------------------------------------------------------------")
console.log("Kahdeksas tehtävä")
var mile, kilo;
mile = 23
km = 1.609 * mile;
console.log(km)
console.log("-----------------------------------------------------------------------------------")
console.log("Yhdeksäs tehtävä")
var mile, kilo;
kilo = 23
mile = kilo / 1.609;
console.log(mile)
console.log("-----------------------------------------------------------------------------------")
console.log("Kymmenes tehtävä")
var sentit, inch;
inch = 23;
sentit = inch * 2.54;
console.log(sentit);
console.log("-----------------------------------------------------------------------------------")
console.log("Yksitoista")
var sentit, inch;
sentit = 23;
inch = sentit / 2.54;
console.log(inch);
console.log("-----------------------------------------------------------------------------------")
console.log("Kaksitoista")
var yard, metri;
yard = 23;
metri = yard * 0.9144;
console.log(metri);
console.log("-----------------------------------------------------------------------------------")
console.log("Kolmetoista")
var yard, metri;
metri = 23;
yard = metri / 0.9144;
console.log(yard)
console.log("-----------------------------------------------------------------------------------")
console.log("Neljätoista")
function Muunnos(Fahrenheit){
    let celcius = parseInt((Fahrenheit - 32) * 5 / 9 )
    console.log(Fahrenheit + " Fahrenheit on " + celcius + " Celciusta ")
}
Muunnos(483)
