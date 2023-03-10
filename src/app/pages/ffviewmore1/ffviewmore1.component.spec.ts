import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ffviewmore1Component } from './ffviewmore1.component';

describe('Ffviewmore1Component', () => {
  let component: Ffviewmore1Component;
  let fixture: ComponentFixture<Ffviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ffviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ffviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
