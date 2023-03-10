import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ffviewmore3Component } from './ffviewmore3.component';

describe('Ffviewmore3Component', () => {
  let component: Ffviewmore3Component;
  let fixture: ComponentFixture<Ffviewmore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ffviewmore3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ffviewmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
