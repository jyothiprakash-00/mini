import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggroomingComponent } from './doggrooming.component';

describe('DoggroomingComponent', () => {
  let component: DoggroomingComponent;
  let fixture: ComponentFixture<DoggroomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoggroomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoggroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
