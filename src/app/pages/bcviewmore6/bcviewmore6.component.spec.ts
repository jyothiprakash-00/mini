import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcviewmore6Component } from './bcviewmore6.component';

describe('Bcviewmore6Component', () => {
  let component: Bcviewmore6Component;
  let fixture: ComponentFixture<Bcviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
