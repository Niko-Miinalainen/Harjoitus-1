class Kirja{
    #sivuMaara;
    constructor(sivumaara = 16){
        this.#sivuMaara = sivumaara
    }
    haeSivumaara(){
        return this.#sivuMaara
    }
}

const kirjaOletus = new Kirja();
console.log("Oletussivumäärä: " + kirjaOletus.haeSivumaara());
const kirjaMuokattu = new Kirja(24);
console.log("Mukautettu sivumäärä: " + kirjaMuokattu.haeSivumaara());