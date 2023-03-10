import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfviewmore4Component } from './dfviewmore4.component';

describe('Dfviewmore4Component', () => {
  let component: Dfviewmore4Component;
  let fixture: ComponentFixture<Dfviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dfviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
