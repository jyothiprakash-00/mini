import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgviewmore6Component } from './cgviewmore6.component';

describe('Cgviewmore6Component', () => {
  let component: Cgviewmore6Component;
  let fixture: ComponentFixture<Cgviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cgviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
