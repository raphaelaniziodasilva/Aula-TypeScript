import { Animal } from "./Animal";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";

let animal = new Animal("Arara", "Azul", "Femêa", 0.321)
animal.apresentarAnimal()

let cachorro = new Cachorro("Scote", "Puddle", "Macho", 0.505, true)
cachorro.apresentarAnimal()

let gato = new Gato("Gato de botas", "Mestiço", "Femea", 0.453, true)
gato.apresentarAnimal()
gato.gatoMia()