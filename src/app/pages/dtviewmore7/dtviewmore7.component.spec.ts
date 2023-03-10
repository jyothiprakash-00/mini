import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtviewmore7Component } from './dtviewmore7.component';

describe('Dtviewmore7Component', () => {
  let component: Dtviewmore7Component;
  let fixture: ComponentFixture<Dtviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
