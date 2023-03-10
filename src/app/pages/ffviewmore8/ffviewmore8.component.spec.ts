import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ffviewmore8Component } from './ffviewmore8.component';

describe('Ffviewmore8Component', () => {
  let component: Ffviewmore8Component;
  let fixture: ComponentFixture<Ffviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ffviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ffviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
