import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdgroomingComponent } from './birdgrooming.component';

describe('BirdgroomingComponent', () => {
  let component: BirdgroomingComponent;
  let fixture: ComponentFixture<BirdgroomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdgroomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdgroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
