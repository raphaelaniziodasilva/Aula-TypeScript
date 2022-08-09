"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome, raca, sexo, peso) {
        this.nome = nome;
        this.raca = raca;
        this.sexo = sexo;
        this.peso = peso;
    }
    apresentarAnimal() {
        console.log(`nome: ${this.nome} raça: ${this.raca} sexo: ${this.sexo} peso: ${this.peso}`);
    }
    extinção() {
        if (this.raca == "Pit Bull") {
            console.log("Raça em estinção");
        }
    }
}
exports.Animal = Animal;
