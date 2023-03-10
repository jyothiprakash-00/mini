import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgviewmore8Component } from './bgviewmore8.component';

describe('Bgviewmore8Component', () => {
  let component: Bgviewmore8Component;
  let fixture: ComponentFixture<Bgviewmore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bgviewmore8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgviewmore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
