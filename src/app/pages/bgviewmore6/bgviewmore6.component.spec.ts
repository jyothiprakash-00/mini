import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgviewmore6Component } from './bgviewmore6.component';

describe('Bgviewmore6Component', () => {
  let component: Bgviewmore6Component;
  let fixture: ComponentFixture<Bgviewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bgviewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgviewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
