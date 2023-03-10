import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctviewmore7Component } from './ctviewmore7.component';

describe('Ctviewmore7Component', () => {
  let component: Ctviewmore7Component;
  let fixture: ComponentFixture<Ctviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
