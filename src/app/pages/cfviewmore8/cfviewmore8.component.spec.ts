import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfviewmore8Component } from './cfviewmore8.component';

describe('Cfviewmore8Component', () => {
  let component: Cfviewmore8Component;
  let fixture: ComponentFixture<Cfviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
