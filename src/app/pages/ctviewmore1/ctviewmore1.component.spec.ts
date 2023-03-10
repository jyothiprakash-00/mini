import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctviewmore1Component } from './ctviewmore1.component';

describe('Ctviewmore1Component', () => {
  let component: Ctviewmore1Component;
  let fixture: ComponentFixture<Ctviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
