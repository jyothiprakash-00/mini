import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfviewmore8Component } from './bfviewmore8.component';

describe('Bfviewmore8Component', () => {
  let component: Bfviewmore8Component;
  let fixture: ComponentFixture<Bfviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
