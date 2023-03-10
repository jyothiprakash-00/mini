import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcviewmore7Component } from './bcviewmore7.component';

describe('Bcviewmore7Component', () => {
  let component: Bcviewmore7Component;
  let fixture: ComponentFixture<Bcviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
