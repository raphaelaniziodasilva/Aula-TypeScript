import { Pessoa } from "./Pessoa";
import { Clt } from "./Clt"

export class Empregado extends Pessoa implements Clt{
    contrato(): void{
        console.log("Prestação de contrato CLT");
    }
};