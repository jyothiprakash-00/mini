import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgviewmore2Component } from './bgviewmore2.component';

describe('Bgviewmore2Component', () => {
  let component: Bgviewmore2Component;
  let fixture: ComponentFixture<Bgviewmore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bgviewmore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgviewmore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
