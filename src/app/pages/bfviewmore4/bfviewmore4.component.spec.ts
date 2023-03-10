import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfviewmore4Component } from './bfviewmore4.component';

describe('Bfviewmore4Component', () => {
  let component: Bfviewmore4Component;
  let fixture: ComponentFixture<Bfviewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfviewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfviewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
