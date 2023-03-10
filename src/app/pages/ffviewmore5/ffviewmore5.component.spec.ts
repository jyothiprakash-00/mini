import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ffviewmore5Component } from './ffviewmore5.component';

describe('Ffviewmore5Component', () => {
  let component: Ffviewmore5Component;
  let fixture: ComponentFixture<Ffviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ffviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ffviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
