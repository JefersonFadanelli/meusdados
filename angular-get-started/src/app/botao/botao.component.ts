import { Component, OnInit, Input, Inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao',
  template: `
    <button type="submit" class="btn {{estiloBotao}}" (click)="clicou(funcao)" routerLink="/heroes" >{{descricao}}</button>
  `,
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  @Input() descricao: string;
  @Input() funcao: string;
  @Input() estiloBotao: string;
  @Inject(Router) private router: Router;

  constructor() {
  }

  ngOnInit() {
  }

  public clicou( funcaoT ) {
    if(funcaoT === 'voltar'){
        //alert("Voltar");
    }else{
        //alert("Avançar");
        this.router.navigate(['/hero']);
    }
  }
}
