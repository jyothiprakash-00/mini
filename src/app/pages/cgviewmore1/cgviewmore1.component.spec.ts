import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgviewmore1Component } from './cgviewmore1.component';

describe('Cgviewmore1Component', () => {
  let component: Cgviewmore1Component;
  let fixture: ComponentFixture<Cgviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cgviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
