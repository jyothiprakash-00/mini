import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctviewmore6Component } from './ctviewmore6.component';

describe('Ctviewmore6Component', () => {
  let component: Ctviewmore6Component;
  let fixture: ComponentFixture<Ctviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
