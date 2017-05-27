import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resposta',
  template: `
    <input type="text" class="form-control" id="input-respsota">
  `,
  styleUrls: ['./resposta.component.scss']
})
export class RespostaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
