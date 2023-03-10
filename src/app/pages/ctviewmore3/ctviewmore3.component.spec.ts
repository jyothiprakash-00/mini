import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctviewmore3Component } from './ctviewmore3.component';

describe('Ctviewmore3Component', () => {
  let component: Ctviewmore3Component;
  let fixture: ComponentFixture<Ctviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
