"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
// Herança: esta herdando da classe Pessoa
class Cliente extends Pessoa_1.Pessoa {
    constructor(nome, idade, estado, cidade, assinante, cpf) {
        super(nome, idade, estado, cidade, cpf);
        this.assinante = assinante;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    verAssinatura() {
        if (this.assinante) {
            console.log("É assinante");
        }
        else {
            console.log("Não é assinante");
        }
    }
}
exports.Cliente = Cliente;
