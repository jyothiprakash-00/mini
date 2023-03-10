import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfviewmore6Component } from './dfviewmore6.component';

describe('Dfviewmore6Component', () => {
  let component: Dfviewmore6Component;
  let fixture: ComponentFixture<Dfviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dfviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
