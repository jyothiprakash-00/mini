import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpviewmore3Component } from './fpviewmore3.component';

describe('Fpviewmore3Component', () => {
  let component: Fpviewmore3Component;
  let fixture: ComponentFixture<Fpviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
