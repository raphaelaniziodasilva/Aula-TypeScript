import { Animal } from "./Animal";

export class Gato extends Animal {
    miau: boolean

    constructor(nome: string, raca: string, sexo: string, peso: number, miau: boolean) {
        super(nome, raca, sexo, peso)
        this.miau = miau
    }

    public gatoMia(){
        if(this.miau) {
            console.log("Miau")
        } else {
            console.log("xiu")
        }
    }
}