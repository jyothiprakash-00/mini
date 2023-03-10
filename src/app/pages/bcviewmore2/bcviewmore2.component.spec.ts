import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcviewmore2Component } from './bcviewmore2.component';

describe('Bcviewmore2Component', () => {
  let component: Bcviewmore2Component;
  let fixture: ComponentFixture<Bcviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
