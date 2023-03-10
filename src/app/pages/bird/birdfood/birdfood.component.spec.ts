import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdfoodComponent } from './birdfood.component';

describe('BirdfoodComponent', () => {
  let component: BirdfoodComponent;
  let fixture: ComponentFixture<BirdfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
