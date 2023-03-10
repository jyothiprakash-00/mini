import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmore6Component } from './viewmore6.component';

describe('Viewmore6Component', () => {
  let component: Viewmore6Component;
  let fixture: ComponentFixture<Viewmore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewmore6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
