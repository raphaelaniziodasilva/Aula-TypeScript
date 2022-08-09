"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Animal_1 = require("./Animal");
class Cachorro extends Animal_1.Animal {
    constructor(nome, raca, sexo, peso, vacina) {
        super(nome, raca, sexo, peso);
        this.vacina = vacina;
    }
    vacinado() {
        if (this.vacina) {
            console.log("Animal vacinado");
        }
        else {
            console.log("Não esta vacinado");
        }
    }
}
exports.Cachorro = Cachorro;
