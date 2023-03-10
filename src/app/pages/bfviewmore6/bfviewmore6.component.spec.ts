import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfviewmore6Component } from './bfviewmore6.component';

describe('Bfviewmore6Component', () => {
  let component: Bfviewmore6Component;
  let fixture: ComponentFixture<Bfviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
