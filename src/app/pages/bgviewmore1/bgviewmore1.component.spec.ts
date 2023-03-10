import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgviewmore1Component } from './bgviewmore1.component';

describe('Bgviewmore1Component', () => {
  let component: Bgviewmore1Component;
  let fixture: ComponentFixture<Bgviewmore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bgviewmore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgviewmore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
