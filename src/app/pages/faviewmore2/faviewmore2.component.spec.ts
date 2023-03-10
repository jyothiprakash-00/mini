import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faviewmore2Component } from './faviewmore2.component';

describe('Faviewmore2Component', () => {
  let component: Faviewmore2Component;
  let fixture: ComponentFixture<Faviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
