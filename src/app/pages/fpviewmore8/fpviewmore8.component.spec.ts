import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpviewmore8Component } from './fpviewmore8.component';

describe('Fpviewmore8Component', () => {
  let component: Fpviewmore8Component;
  let fixture: ComponentFixture<Fpviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
