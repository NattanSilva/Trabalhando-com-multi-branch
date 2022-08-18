export class Veiculo {
  constructor(proprietário, placa, tipoDeCombustível, anoDeFabricacao) {
    this._proprietário = proprietário;
    this._placa = placa;
    this._tipoDeCombustível = tipoDeCombustível;
    this._anoDeFabricacao = anoDeFabricacao;
  }

  get proprietário() {
    return this._proprietário;
  }

  get placa() {
    return this._placa;
  }

  get tipoDeCombustível() {
    return this._tipoDeCombustível;
  }

  get anoDeFabricacao() {
    return this._anoDeFabricacao;
  }
}