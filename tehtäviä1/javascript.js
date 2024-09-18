function parillinen(luku){
    if (luku % 2 == 0) {
        console.log("Luku on parillinen")
    }
    else {
        console.log("Luku on pariton")
    }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var bigNumbers = numbers.filter(numbers => numbers > 5);
console.log(bigNumbers);

function kolmioLaskuri(a, b , c){
    if (a + b + c == 180) {
        console.log("Kolmio")
    }
    else{
        console.log("Kolmio ei mahdollinen")
    }

}

function parillinenPariton(luku) {
    if (luku % 2 == 0) {
        console.log("Luku on parillinen");
    }
    else {
        console.log("Luku on pariton");
    }
}
parillinenPariton(18)
parillinenPariton(71)