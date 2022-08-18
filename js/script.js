import { Automovel } from "./modules/Automovel.js";
import { Caminhao } from "./modules/Caminhao.js";

let carro = new Automovel("Marcos", "PFW5100", "Gasolina", 2018, 5, 4);
let camiao = new Caminhao("José", "H35B52F", "Diesel", 2020, "2 Toneladas");

console.log(carro.retornarInformacoes());
console.log(camiao.retornarInformacoes());
