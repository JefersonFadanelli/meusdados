import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-pergunta',
  template: `
    <h3>
      {{titulo}}
    </h3>
  `,
  styleUrls: ['./titulo-pergunta.component.scss']
})
export class TituloPerguntaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  titulo = 'Qual é o seu nome completo?';

}
