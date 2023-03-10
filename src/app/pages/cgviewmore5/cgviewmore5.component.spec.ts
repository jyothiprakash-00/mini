import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgviewmore5Component } from './cgviewmore5.component';

describe('Cgviewmore5Component', () => {
  let component: Cgviewmore5Component;
  let fixture: ComponentFixture<Cgviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cgviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
