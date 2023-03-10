import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpviewmore6Component } from './fpviewmore6.component';

describe('Fpviewmore6Component', () => {
  let component: Fpviewmore6Component;
  let fixture: ComponentFixture<Fpviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
