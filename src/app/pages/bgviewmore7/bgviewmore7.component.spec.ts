import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgviewmore7Component } from './bgviewmore7.component';

describe('Bgviewmore7Component', () => {
  let component: Bgviewmore7Component;
  let fixture: ComponentFixture<Bgviewmore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bgviewmore7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgviewmore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
