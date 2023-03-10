import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfviewmore4Component } from './cfviewmore4.component';

describe('Cfviewmore4Component', () => {
  let component: Cfviewmore4Component;
  let fixture: ComponentFixture<Cfviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
