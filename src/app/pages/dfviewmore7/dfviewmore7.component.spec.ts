import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfviewmore7Component } from './dfviewmore7.component';

describe('Dfviewmore7Component', () => {
  let component: Dfviewmore7Component;
  let fixture: ComponentFixture<Dfviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dfviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
