import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgviewmore7Component } from './cgviewmore7.component';

describe('Cgviewmore7Component', () => {
  let component: Cgviewmore7Component;
  let fixture: ComponentFixture<Cgviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cgviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
