import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfviewmore7Component } from './bfviewmore7.component';

describe('Bfviewmore7Component', () => {
  let component: Bfviewmore7Component;
  let fixture: ComponentFixture<Bfviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
