import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpviewmore7Component } from './fpviewmore7.component';

describe('Fpviewmore7Component', () => {
  let component: Fpviewmore7Component;
  let fixture: ComponentFixture<Fpviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
