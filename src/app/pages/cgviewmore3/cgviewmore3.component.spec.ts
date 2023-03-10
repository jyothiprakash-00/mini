import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgviewmore3Component } from './cgviewmore3.component';

describe('Cgviewmore3Component', () => {
  let component: Cgviewmore3Component;
  let fixture: ComponentFixture<Cgviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cgviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
