import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtviewmore3Component } from './dtviewmore3.component';

describe('Dtviewmore3Component', () => {
  let component: Dtviewmore3Component;
  let fixture: ComponentFixture<Dtviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
