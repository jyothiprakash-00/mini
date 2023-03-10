import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfviewmore6Component } from './cfviewmore6.component';

describe('Cfviewmore6Component', () => {
  let component: Cfviewmore6Component;
  let fixture: ComponentFixture<Cfviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
