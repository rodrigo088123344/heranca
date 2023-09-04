
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando.`);
    }

    frear() {
        console.log(`${this.marca} ${this.modelo} está freando.`);
    }
}


class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    abrirPortas() {
        console.log(`${this.marca} ${this.modelo} está abrindo ${this.portas} portas.`);
    }
}


class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligando as ${this.cilindradas} cilindradas.`);
    }
}


const meuCarro = new Carro("Toyota", "Corolla", 4);
const minhaMoto = new Moto("Honda", "CBR600RR", 600);


meuCarro.acelerar();
meuCarro.abrirPortas();