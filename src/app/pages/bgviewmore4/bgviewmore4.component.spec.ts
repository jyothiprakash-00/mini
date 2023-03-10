import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgviewmore4Component } from './bgviewmore4.component';

describe('Bgviewmore4Component', () => {
  let component: Bgviewmore4Component;
  let fixture: ComponentFixture<Bgviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bgviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
