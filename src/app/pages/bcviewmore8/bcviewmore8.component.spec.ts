import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcviewmore8Component } from './bcviewmore8.component';

describe('Bcviewmore8Component', () => {
  let component: Bcviewmore8Component;
  let fixture: ComponentFixture<Bcviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
