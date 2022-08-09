"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    constructor(nome, raca, sexo, peso, miau) {
        super(nome, raca, sexo, peso);
        this.miau = miau;
    }
    gatoMia() {
        if (this.miau) {
            console.log("Miau");
        }
        else {
            console.log("xiu");
        }
    }
}
exports.Gato = Gato;
