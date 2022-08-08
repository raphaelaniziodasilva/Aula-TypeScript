import {Pessoa} from "./Pessoa"

// Herança: esta herdando da classe Pessoa
export class Cliente extends Pessoa {
    assinante: boolean

    constructor(nome: string, idade: number, estado: string, cidade: string, assinante: boolean, cpf: string) {
        super(nome, idade, estado, cidade, cpf)
        this.assinante = assinante
    }

    public getCpf(): string {
        return this.cpf
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf
    }

    public verAssinatura(){
        if(this.assinante) {
            console.log("É assinante")
        } else {
            console.log("Não é assinante")
        }
    }
   

}


