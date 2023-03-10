import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfviewmore2Component } from './cfviewmore2.component';

describe('Cfviewmore2Component', () => {
  let component: Cfviewmore2Component;
  let fixture: ComponentFixture<Cfviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
