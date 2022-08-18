import { Veiculo } from "./Veiculo.js";

export class Caminhao extends Veiculo {
  constructor(proprietário, placa, tipoDeCombustível, anoDeFabricacao, cargaMaxima) {
    super(proprietário, placa, tipoDeCombustível, anoDeFabricacao);
    this._cargaMaxima = cargaMaxima;
  }

  get cargaMaxima() {
    return this._cargaMaxima;
  }

  retornarInformacoes() {
    return `Caminhão:\n Placa: ${this.placa};\n ano: ${this.anoDeFabricacao};\n tipo de combustível: ${this.tipoDeCombustível};\n carga máxima: ${this.cargaMaxima};\n proprietário: ${this.proprietário}.`;
  }
}