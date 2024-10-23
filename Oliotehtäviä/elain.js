class Elain{
    constructor(nimi = ""){
        this._nimi = nimi
    }

    get nimi(){
        return this._nimi
    }

    set nimi(uusiNimi){
        this._nimi = uusiNimi
    }

    syo(){
        console.log(this._nimi + " syö - namnamnam")
    }
}

class Koira extends Elain{
    constructor(nimi = "", tassut = 4, turkki = ""){
        super(nimi)
        this._tassut = tassut
        this._turkki = turkki
    }

    get tassut(){
        return this._tassut
    }
    set tassut(uudetTassut){
        this._tassut = uudetTassut
    }
    get turkki(){
        return this._turkki
    }
    set turkki(uusiTurkki){
        this._turkki = uusiTurkki
    }

    aantelee(aani){
        console.log(this.nimi + "" + aani)
    }

}
const koira = new Koira("Haukkuja");
console.log("Olio koira, nimi: " + koira.nimi)
console.log("Tassujen määrä: " + koira.tassut)

koira.nimi = "Joosef";
koira.tassut = 3;
console.log("Koiran uusi nimi: " + koira.nimi)
console.log("Tassujen uusi määrä: " + koira.tassut)
koira.aantelee(" hau hau")
