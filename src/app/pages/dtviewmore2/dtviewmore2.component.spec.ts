import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtviewmore2Component } from './dtviewmore2.component';

describe('Dtviewmore2Component', () => {
  let component: Dtviewmore2Component;
  let fixture: ComponentFixture<Dtviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
