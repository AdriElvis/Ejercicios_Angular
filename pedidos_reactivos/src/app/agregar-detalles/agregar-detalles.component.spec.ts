import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDetallesComponent } from './agregar-detalles.component';

describe('AgregarDetallesComponent', () => {
  let component: AgregarDetallesComponent;
  let fixture: ComponentFixture<AgregarDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
