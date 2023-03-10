import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtviewmore8Component } from './dtviewmore8.component';

describe('Dtviewmore8Component', () => {
  let component: Dtviewmore8Component;
  let fixture: ComponentFixture<Dtviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
