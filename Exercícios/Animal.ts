export class Animal {
    public nome: string
    public raca: string
    public sexo: string
    public peso: number

    constructor(nome: string, raca: string, sexo: string, peso: number ) {
        this.nome = nome
        this.raca = raca
        this.sexo = sexo
        this.peso = peso
    }

    public apresentarAnimal(){
        console.log(`nome: ${this.nome} raça: ${this.raca} sexo: ${this.sexo} peso: ${this.peso}`)
    }

    protected extinção() {
        if(this.raca == "Pit Bull") {
            console.log("Raça em estinção")
        }
    }

}