import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctviewmore2Component } from './ctviewmore2.component';

describe('Ctviewmore2Component', () => {
  let component: Ctviewmore2Component;
  let fixture: ComponentFixture<Ctviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
