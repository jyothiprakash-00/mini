import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ffviewmore6Component } from './ffviewmore6.component';

describe('Ffviewmore6Component', () => {
  let component: Ffviewmore6Component;
  let fixture: ComponentFixture<Ffviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ffviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ffviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
