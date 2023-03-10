import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtviewmore5Component } from './dtviewmore5.component';

describe('Dtviewmore5Component', () => {
  let component: Dtviewmore5Component;
  let fixture: ComponentFixture<Dtviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
