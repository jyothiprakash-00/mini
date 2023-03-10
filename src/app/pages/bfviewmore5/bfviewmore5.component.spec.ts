import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfviewmore5Component } from './bfviewmore5.component';

describe('Bfviewmore5Component', () => {
  let component: Bfviewmore5Component;
  let fixture: ComponentFixture<Bfviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
