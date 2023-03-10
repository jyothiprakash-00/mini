import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgviewmore3Component } from './bgviewmore3.component';

describe('Bgviewmore3Component', () => {
  let component: Bgviewmore3Component;
  let fixture: ComponentFixture<Bgviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bgviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
