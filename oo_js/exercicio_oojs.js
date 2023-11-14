// Criado o objeto abstrato a partir de uma função construtora

function Eletronico(objeto) {
    this.objeto = objeto;
}

// Fabricante é herança de Eletronico

function Fabricante(objeto, fabricante) {
    Eletronico.call(this, objeto);

    this.fabricante = fabricante;
}

// AnoModelo é herança de Fabricante e também de Eletronico

function AnoModelo(objeto, fabricante, anoModelo, ) {
    Fabricante.call(this, objeto, fabricante);

    this.anoModelo = anoModelo
}

// Realizando a criação de três instâncias de objetos

const eletronicoBruno = new AnoModelo("Televisão", "Samsung", 2023);
const eletronicoAna = new AnoModelo("Iphone 11", "Apple", 2020);
const eletronicoKadu = new AnoModelo("Playstation 5", "Sony", 2022);

console.log(eletronicoBruno);
console.log(eletronicoAna);
console.log(eletronicoKadu);

// Verificando a instância -> ok!
console.log(eletronicoBruno instanceof AnoModelo);
console.log(eletronicoAna instanceof AnoModelo);
console.log(eletronicoKadu instanceof AnoModelo);