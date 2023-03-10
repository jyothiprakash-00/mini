import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfviewmore8Component } from './dfviewmore8.component';

describe('Dfviewmore8Component', () => {
  let component: Dfviewmore8Component;
  let fixture: ComponentFixture<Dfviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dfviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
