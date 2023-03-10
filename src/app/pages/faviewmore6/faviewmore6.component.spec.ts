import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faviewmore6Component } from './faviewmore6.component';

describe('Faviewmore6Component', () => {
  let component: Faviewmore6Component;
  let fixture: ComponentFixture<Faviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
