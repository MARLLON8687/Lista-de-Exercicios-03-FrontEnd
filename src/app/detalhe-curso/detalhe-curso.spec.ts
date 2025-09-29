import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCurso } from './detalhe-curso';

describe('DetalheCurso', () => {
  let component: DetalheCurso;
  let fixture: ComponentFixture<DetalheCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
