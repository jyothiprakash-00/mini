import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtviewmore4Component } from './dtviewmore4.component';

describe('Dtviewmore4Component', () => {
  let component: Dtviewmore4Component;
  let fixture: ComponentFixture<Dtviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
