import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosPadreComponent } from './lista-pedidos-padre.component';

describe('ListaPedidosPadreComponent', () => {
  let component: ListaPedidosPadreComponent;
  let fixture: ComponentFixture<ListaPedidosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPedidosPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPedidosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
