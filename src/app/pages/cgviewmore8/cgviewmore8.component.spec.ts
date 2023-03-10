import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgviewmore8Component } from './cgviewmore8.component';

describe('Cgviewmore8Component', () => {
  let component: Cgviewmore8Component;
  let fixture: ComponentFixture<Cgviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cgviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
