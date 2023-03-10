import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpviewmore5Component } from './fpviewmore5.component';

describe('Fpviewmore5Component', () => {
  let component: Fpviewmore5Component;
  let fixture: ComponentFixture<Fpviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
