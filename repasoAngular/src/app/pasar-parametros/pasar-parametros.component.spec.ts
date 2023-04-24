import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasarParametrosComponent } from './pasar-parametros.component';

describe('PasarParametrosComponent', () => {
  let component: PasarParametrosComponent;
  let fixture: ComponentFixture<PasarParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasarParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasarParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
