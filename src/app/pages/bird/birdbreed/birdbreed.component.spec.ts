import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdbreedComponent } from './birdbreed.component';

describe('BirdbreedComponent', () => {
  let component: BirdbreedComponent;
  let fixture: ComponentFixture<BirdbreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdbreedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
