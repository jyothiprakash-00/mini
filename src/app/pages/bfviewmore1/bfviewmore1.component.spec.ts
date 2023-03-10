import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfviewmore1Component } from './bfviewmore1.component';

describe('Bfviewmore1Component', () => {
  let component: Bfviewmore1Component;
  let fixture: ComponentFixture<Bfviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
