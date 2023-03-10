import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcviewmore1Component } from './bcviewmore1.component';

describe('Bcviewmore1Component', () => {
  let component: Bcviewmore1Component;
  let fixture: ComponentFixture<Bcviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
