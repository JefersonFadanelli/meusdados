import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  template: `
    <button type="submit" class="btn {{estiloBotao}}" (click)="clicou(funcao)"  >{{descricao}}</button>
  `,
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  @Input() descricao: string;
  @Input() funcao: string;
  @Input() estiloBotao: string;

  constructor() {
  }

  ngOnInit() {
  }

  public clicou( funcaoT ) {
    if(funcaoT === 'voltar'){
        //alert("Voltar");
    }else{
        //alert("Avançar");
    }
  }
}
