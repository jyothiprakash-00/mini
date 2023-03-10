import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfviewmore3Component } from './bfviewmore3.component';

describe('Bfviewmore3Component', () => {
  let component: Bfviewmore3Component;
  let fixture: ComponentFixture<Bfviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bfviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
