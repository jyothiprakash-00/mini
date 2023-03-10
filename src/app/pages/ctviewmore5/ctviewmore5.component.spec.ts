import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctviewmore5Component } from './ctviewmore5.component';

describe('Ctviewmore5Component', () => {
  let component: Ctviewmore5Component;
  let fixture: ComponentFixture<Ctviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
