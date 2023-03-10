import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdcageComponent } from './birdcage.component';

describe('BirdcageComponent', () => {
  let component: BirdcageComponent;
  let fixture: ComponentFixture<BirdcageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdcageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdcageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
