import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpviewmore2Component } from './fpviewmore2.component';

describe('Fpviewmore2Component', () => {
  let component: Fpviewmore2Component;
  let fixture: ComponentFixture<Fpviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
