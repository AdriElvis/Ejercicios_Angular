import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirIdComponent } from './recibir-id.component';

describe('RecibirIdComponent', () => {
  let component: RecibirIdComponent;
  let fixture: ComponentFixture<RecibirIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibirIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibirIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
