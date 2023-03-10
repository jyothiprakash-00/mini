import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faviewmore5Component } from './faviewmore5.component';

describe('Faviewmore5Component', () => {
  let component: Faviewmore5Component;
  let fixture: ComponentFixture<Faviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
