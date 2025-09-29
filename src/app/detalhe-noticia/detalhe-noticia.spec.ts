import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheNoticia } from './detalhe-noticia';

describe('DetalheNoticia', () => {
  let component: DetalheNoticia;
  let fixture: ComponentFixture<DetalheNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheNoticia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheNoticia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
