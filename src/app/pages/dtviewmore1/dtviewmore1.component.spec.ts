import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtviewmore1Component } from './dtviewmore1.component';

describe('Dtviewmore1Component', () => {
  let component: Dtviewmore1Component;
  let fixture: ComponentFixture<Dtviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
