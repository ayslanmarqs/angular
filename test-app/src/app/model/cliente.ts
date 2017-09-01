/// <reference path="interface/pessoa.ts" />

class Cliente implements IPessoa {
  private _nome: string;
  private _documento: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  get documento(): string {
    return this._documento;
  }

  set documento(pdocumento: string) {
    this._documento = pdocumento;
  }
}
