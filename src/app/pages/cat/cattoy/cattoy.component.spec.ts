import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattoyComponent } from './cattoy.component';

describe('CattoyComponent', () => {
  let component: CattoyComponent;
  let fixture: ComponentFixture<CattoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CattoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
