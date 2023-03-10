import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpviewmore4Component } from './fpviewmore4.component';

describe('Fpviewmore4Component', () => {
  let component: Fpviewmore4Component;
  let fixture: ComponentFixture<Fpviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
