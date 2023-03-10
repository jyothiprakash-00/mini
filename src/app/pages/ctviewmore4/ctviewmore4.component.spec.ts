import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctviewmore4Component } from './ctviewmore4.component';

describe('Ctviewmore4Component', () => {
  let component: Ctviewmore4Component;
  let fixture: ComponentFixture<Ctviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
