import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgviewmore4Component } from './cgviewmore4.component';

describe('Cgviewmore4Component', () => {
  let component: Cgviewmore4Component;
  let fixture: ComponentFixture<Cgviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cgviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
