import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdtoyComponent } from './birdtoy.component';

describe('BirdtoyComponent', () => {
  let component: BirdtoyComponent;
  let fixture: ComponentFixture<BirdtoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdtoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdtoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
