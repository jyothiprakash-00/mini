import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcviewmore3Component } from './bcviewmore3.component';

describe('Bcviewmore3Component', () => {
  let component: Bcviewmore3Component;
  let fixture: ComponentFixture<Bcviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
