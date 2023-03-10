import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfviewmore1Component } from './cfviewmore1.component';

describe('Cfviewmore1Component', () => {
  let component: Cfviewmore1Component;
  let fixture: ComponentFixture<Cfviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
