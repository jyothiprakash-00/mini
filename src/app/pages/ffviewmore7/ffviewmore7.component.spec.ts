import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ffviewmore7Component } from './ffviewmore7.component';

describe('Ffviewmore7Component', () => {
  let component: Ffviewmore7Component;
  let fixture: ComponentFixture<Ffviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ffviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ffviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
