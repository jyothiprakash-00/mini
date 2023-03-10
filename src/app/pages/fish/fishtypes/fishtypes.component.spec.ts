import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishtypesComponent } from './fishtypes.component';

describe('FishtypesComponent', () => {
  let component: FishtypesComponent;
  let fixture: ComponentFixture<FishtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishtypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
