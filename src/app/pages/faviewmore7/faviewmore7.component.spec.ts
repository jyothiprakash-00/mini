import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faviewmore7Component } from './faviewmore7.component';

describe('Faviewmore7Component', () => {
  let component: Faviewmore7Component;
  let fixture: ComponentFixture<Faviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
