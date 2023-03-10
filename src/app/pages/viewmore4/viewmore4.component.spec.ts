import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmore4Component } from './viewmore4.component';

describe('Viewmore4Component', () => {
  let component: Viewmore4Component;
  let fixture: ComponentFixture<Viewmore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewmore4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
