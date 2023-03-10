import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmore2Component } from './viewmore2.component';

describe('Viewmore2Component', () => {
  let component: Viewmore2Component;
  let fixture: ComponentFixture<Viewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
