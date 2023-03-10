import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfviewmore3Component } from './cfviewmore3.component';

describe('Cfviewmore3Component', () => {
  let component: Cfviewmore3Component;
  let fixture: ComponentFixture<Cfviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
