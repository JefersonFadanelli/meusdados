import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPerguntaComponent } from './titulo-pergunta.component';

describe('TituloPerguntaComponent', () => {
  let component: TituloPerguntaComponent;
  let fixture: ComponentFixture<TituloPerguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloPerguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
