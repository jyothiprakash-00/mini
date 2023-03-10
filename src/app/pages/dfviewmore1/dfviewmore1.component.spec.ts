import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfviewmore1Component } from './dfviewmore1.component';

describe('Dfviewmore1Component', () => {
  let component: Dfviewmore1Component;
  let fixture: ComponentFixture<Dfviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dfviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
