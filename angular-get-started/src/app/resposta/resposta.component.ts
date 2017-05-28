import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resposta',
  template: `
    <input type="text" class=" col-md-6 col-sm-offset-3 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1" id="input-respsota">
  `,
  styleUrls: ['./resposta.component.scss']
})
export class RespostaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
