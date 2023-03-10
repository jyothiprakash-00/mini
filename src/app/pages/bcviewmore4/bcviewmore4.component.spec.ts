import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcviewmore4Component } from './bcviewmore4.component';

describe('Bcviewmore4Component', () => {
  let component: Bcviewmore4Component;
  let fixture: ComponentFixture<Bcviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
