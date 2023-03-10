import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgviewmore2Component } from './cgviewmore2.component';

describe('Cgviewmore2Component', () => {
  let component: Cgviewmore2Component;
  let fixture: ComponentFixture<Cgviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cgviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
