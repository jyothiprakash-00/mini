import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgviewmore5Component } from './bgviewmore5.component';

describe('Bgviewmore5Component', () => {
  let component: Bgviewmore5Component;
  let fixture: ComponentFixture<Bgviewmore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bgviewmore5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgviewmore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
