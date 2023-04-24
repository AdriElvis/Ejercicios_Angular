import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHolaMundoComponent } from './servicio-hola-mundo.component';

describe('ServicioHolaMundoComponent', () => {
  let component: ServicioHolaMundoComponent;
  let fixture: ComponentFixture<ServicioHolaMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioHolaMundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioHolaMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
