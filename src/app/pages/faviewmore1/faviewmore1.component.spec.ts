import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faviewmore1Component } from './faviewmore1.component';

describe('Faviewmore1Component', () => {
  let component: Faviewmore1Component;
  let fixture: ComponentFixture<Faviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
