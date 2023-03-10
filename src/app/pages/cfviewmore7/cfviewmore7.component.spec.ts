import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfviewmore7Component } from './cfviewmore7.component';

describe('Cfviewmore7Component', () => {
  let component: Cfviewmore7Component;
  let fixture: ComponentFixture<Cfviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
