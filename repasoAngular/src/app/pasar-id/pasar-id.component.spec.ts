import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasarIdComponent } from './pasar-id.component';

describe('PasarIdComponent', () => {
  let component: PasarIdComponent;
  let fixture: ComponentFixture<PasarIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasarIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
