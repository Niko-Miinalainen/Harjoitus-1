class Pankkitili{
    constructor(){
        this.saldo = 0
    }

    talleta(maara){
        if (maara > 0) {
            this.saldo += maara
            console.log(`Tallennettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`)
        }
        else {
            console.log("Tallennettava määrä on väärin")
        }
    }
    nosta(maara){
        if (maara <= this.saldo){
            this.saldo -= maara
            console.log(`Nostettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`)
        }
        else {
            console.log("Nostettava määrä ylittää tilin saldon.")
        }
    
    }

}
const tili = new Pankkitili()
tili.talleta(500)
tili.nosta(450)
tili.talleta(-40)
tili.nosta(6000)