import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProfessor } from './detalhe-professor';

describe('DetalheProfessor', () => {
  let component: DetalheProfessor;
  let fixture: ComponentFixture<DetalheProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheProfessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
