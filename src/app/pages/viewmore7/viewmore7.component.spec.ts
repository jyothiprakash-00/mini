import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmore7Component } from './viewmore7.component';

describe('Viewmore7Component', () => {
  let component: Viewmore7Component;
  let fixture: ComponentFixture<Viewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
