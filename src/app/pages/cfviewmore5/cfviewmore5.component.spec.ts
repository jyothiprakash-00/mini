import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfviewmore5Component } from './cfviewmore5.component';

describe('Cfviewmore5Component', () => {
  let component: Cfviewmore5Component;
  let fixture: ComponentFixture<Cfviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
