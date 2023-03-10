import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmore1Component } from './viewmore1.component';

describe('Viewmore1Component', () => {
  let component: Viewmore1Component;
  let fixture: ComponentFixture<Viewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
