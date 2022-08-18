import { Veiculo } from "./Veiculo.js";

export class Automovel extends Veiculo {
  constructor(
    proprietário, placa, tipoDeCombustível, anoDeFabricacao, quantidadeLugares, quantidadePortas
  ) {
    super(proprietário, placa, tipoDeCombustível, anoDeFabricacao);
    this._quantidadeLugares = quantidadeLugares;
    this._quantidadePortas = quantidadePortas;
  }

  get quantidadeLugares() {
    return this._quantidadeLugares;
  }

  get quantidadePortas() {
    return this._quantidadePortas;
  }

  retornarInformacoes() {
    return `Carro:\n Placa: ${this.placa};\n ano: ${this.anoDeFabricacao};\n tipo de combustível: ${this.tipoDeCombustível};\n quantidade de lugares: ${this.quantidadeLugares};\n quantidade de portas: ${this.quantidadePortas};\n proprietário: ${this.proprietário}.`;
  }
}