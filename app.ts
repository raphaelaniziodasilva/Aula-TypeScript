import {Pessoa} from "./Pessoa"
import {Cliente} from "./Cliente"
import {Empregado} from "./Empregado"

let pessoa1 = new Pessoa("Raphael anizio", 27, "SP", "São Paulo", "1246978452-45")
pessoa1.apresentar()

let pessoa2 = new Pessoa("Nildin vieira", 30, "SP", "São Paulo", "236789453-65-45")
pessoa2.apresentar()

let cliente1 = new Cliente("Anderson alves", 28, "SP", "Santo Andre", true, "14532199965")
cliente1.apresentar()
cliente1.verAssinatura()

let cliente2 = new Cliente("Ingrid Sousa", 23, "SP", "Guarulhos", false, "14532199965")
cliente2.apresentar()
cliente2.verAssinatura()
cliente2.getCpf()

let empregado: Empregado = new Empregado("João Paulo", 25, "Salvador", "Bahia", "123456789")
empregado.apresentar()
empregado.contrato()

