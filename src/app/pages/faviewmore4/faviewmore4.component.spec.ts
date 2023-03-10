import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faviewmore4Component } from './faviewmore4.component';

describe('Faviewmore4Component', () => {
  let component: Faviewmore4Component;
  let fixture: ComponentFixture<Faviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
