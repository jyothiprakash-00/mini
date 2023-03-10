import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumsupplyComponent } from './aquariumsupply.component';

describe('AquariumsupplyComponent', () => {
  let component: AquariumsupplyComponent;
  let fixture: ComponentFixture<AquariumsupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumsupplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquariumsupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
