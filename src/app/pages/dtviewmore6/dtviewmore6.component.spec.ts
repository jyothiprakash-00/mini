import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtviewmore6Component } from './dtviewmore6.component';

describe('Dtviewmore6Component', () => {
  let component: Dtviewmore6Component;
  let fixture: ComponentFixture<Dtviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
