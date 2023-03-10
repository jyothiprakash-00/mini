import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctviewmore8Component } from './ctviewmore8.component';

describe('Ctviewmore8Component', () => {
  let component: Ctviewmore8Component;
  let fixture: ComponentFixture<Ctviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
