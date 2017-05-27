import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  template: `
    <button type="submit" class="btn btn-success">Próximo</button>
  `,
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
