import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfviewmore5Component } from './dfviewmore5.component';

describe('Dfviewmore5Component', () => {
  let component: Dfviewmore5Component;
  let fixture: ComponentFixture<Dfviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dfviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
