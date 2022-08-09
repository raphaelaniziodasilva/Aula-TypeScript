import { Animal } from "./Animal";

export class Cachorro extends Animal {
    vacina: boolean
    
    constructor(nome: string, raca: string, sexo: string, peso: number, vacina: boolean){
        super(nome, raca, sexo, peso)
        this.vacina = vacina
    }

    private vacinado() {
    if(this.vacina) {
        console.log("Animal vacinado")
    } else {
        console.log("Não esta vacinado")
    }
    }

}