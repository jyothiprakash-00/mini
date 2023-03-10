import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ffviewmore4Component } from './ffviewmore4.component';

describe('Ffviewmore4Component', () => {
  let component: Ffviewmore4Component;
  let fixture: ComponentFixture<Ffviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ffviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ffviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
