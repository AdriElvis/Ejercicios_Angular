import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionDirectivaComponent } from './union-directiva.component';

describe('UnionDirectivaComponent', () => {
  let component: UnionDirectivaComponent;
  let fixture: ComponentFixture<UnionDirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnionDirectivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnionDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
