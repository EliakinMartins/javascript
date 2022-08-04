let amigo = {
    nome: "André",
    peso: 75, 
    altura: 1.80, 
    nacionalidade: "Indiano",
    engordar(p){
        console.log("Engordou")
        this.peso += p
    }

}

amigo.engordar(2);
console.log(amigo.peso);

const carro = {
    marca: "Honda",
    modelo: "civic",
    cor: "vermelho",
    ano: 2010,
    preço: 22000,
    promoção(valor){
        console.log("BAIXOU!!!")
        this.preço -= valor;
    }
}

carro.promoção(5000)
console.log(carro.preço)