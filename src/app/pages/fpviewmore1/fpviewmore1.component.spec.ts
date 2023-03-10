import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpviewmore1Component } from './fpviewmore1.component';

describe('Fpviewmore1Component', () => {
  let component: Fpviewmore1Component;
  let fixture: ComponentFixture<Fpviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
