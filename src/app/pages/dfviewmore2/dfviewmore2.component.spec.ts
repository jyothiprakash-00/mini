import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfviewmore2Component } from './dfviewmore2.component';

describe('Dfviewmore2Component', () => {
  let component: Dfviewmore2Component;
  let fixture: ComponentFixture<Dfviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dfviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
