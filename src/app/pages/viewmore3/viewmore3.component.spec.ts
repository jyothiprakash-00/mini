import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmore3Component } from './viewmore3.component';

describe('Viewmore3Component', () => {
  let component: Viewmore3Component;
  let fixture: ComponentFixture<Viewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
