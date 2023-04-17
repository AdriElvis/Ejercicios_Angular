import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeracionComponent } from './enumeracion.component';

describe('EnumeracionComponent', () => {
  let component: EnumeracionComponent;
  let fixture: ComponentFixture<EnumeracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumeracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnumeracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
