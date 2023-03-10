import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfviewmore2Component } from './bfviewmore2.component';

describe('Bfviewmore2Component', () => {
  let component: Bfviewmore2Component;
  let fixture: ComponentFixture<Bfviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
