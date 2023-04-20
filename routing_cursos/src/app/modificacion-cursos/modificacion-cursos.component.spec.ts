import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionCursosComponent } from './modificacion-cursos.component';

describe('ModificacionCursosComponent', () => {
  let component: ModificacionCursosComponent;
  let fixture: ComponentFixture<ModificacionCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
