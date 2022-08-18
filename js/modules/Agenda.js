export class Agenda {
  constructor(nome) {
    this._nome = nome;
    this._contatos = [];
  }

  get nome() {
    return this._nome;
  }

  get contatos() {
    return this._contatos;
  }

  set contatos(valor) {
    this._contatos = valor;
  }

  adicionarContato(obj) {
    this.contatos = this.contatos.sort((a,b) => a - b);
    cnsole.log (this.contatos);
  }
}