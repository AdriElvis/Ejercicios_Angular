import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPedidosHijoComponent } from './form-pedidos-hijo.component';

describe('FormPedidosHijoComponent', () => {
  let component: FormPedidosHijoComponent;
  let fixture: ComponentFixture<FormPedidosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPedidosHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPedidosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
