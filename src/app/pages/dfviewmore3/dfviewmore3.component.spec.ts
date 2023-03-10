import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dfviewmore3Component } from './dfviewmore3.component';

describe('Dfviewmore3Component', () => {
  let component: Dfviewmore3Component;
  let fixture: ComponentFixture<Dfviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dfviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dfviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
