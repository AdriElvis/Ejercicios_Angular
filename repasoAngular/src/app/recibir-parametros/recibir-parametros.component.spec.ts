import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirParametrosComponent } from './recibir-parametros.component';

describe('RecibirParametrosComponent', () => {
  let component: RecibirParametrosComponent;
  let fixture: ComponentFixture<RecibirParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibirParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibirParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
