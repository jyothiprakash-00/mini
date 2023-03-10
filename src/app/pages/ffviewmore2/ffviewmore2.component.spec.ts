import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ffviewmore2Component } from './ffviewmore2.component';

describe('Ffviewmore2Component', () => {
  let component: Ffviewmore2Component;
  let fixture: ComponentFixture<Ffviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ffviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ffviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
