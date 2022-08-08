"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade, estado, cidade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.estado = estado;
        this.cidade = cidade;
        this.cpf = cpf;
    }
    apresentar() {
        console.log(`Hello world! Meu nome é ${this.nome} tenho ${this.idade} anos eu sou da ${this.cidade} - ${this.estado}`);
    }
}
exports.Pessoa = Pessoa;
