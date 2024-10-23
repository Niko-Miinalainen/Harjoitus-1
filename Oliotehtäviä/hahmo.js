class Henkilo{
    constructor(nimi, sukunimi, ika){
        this.nimi = nimi
        this.sukunimi = sukunimi
        this.ika = ika
    }
    naytaTiedot(){

        console.log(`Nimi: ${this.nimi} Sukunimi: ${this.sukunimi} Ikä: ${this.ika}`)

    }
}

const risto = new Henkilo("Risto", "Reipas", 10)
risto.naytaTiedot()