import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faviewmore3Component } from './faviewmore3.component';

describe('Faviewmore3Component', () => {
  let component: Faviewmore3Component;
  let fixture: ComponentFixture<Faviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
