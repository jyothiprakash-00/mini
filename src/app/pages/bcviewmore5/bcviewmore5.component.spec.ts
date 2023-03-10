import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcviewmore5Component } from './bcviewmore5.component';

describe('Bcviewmore5Component', () => {
  let component: Bcviewmore5Component;
  let fixture: ComponentFixture<Bcviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
