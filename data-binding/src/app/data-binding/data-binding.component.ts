import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training.com'
  cursoAngular: boolean = true
  urlImagem: string = 'http://lorempixel.com/400/200/sports/'

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular";
  valorInicial = 15;

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botão clicado");
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
