import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmore5Component } from './viewmore5.component';

describe('Viewmore5Component', () => {
  let component: Viewmore5Component;
  let fixture: ComponentFixture<Viewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
