import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faviewmore8Component } from './faviewmore8.component';

describe('Faviewmore8Component', () => {
  let component: Faviewmore8Component;
  let fixture: ComponentFixture<Faviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
