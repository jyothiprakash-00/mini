import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatfoodComponent } from './catfood.component';

describe('CatfoodComponent', () => {
  let component: CatfoodComponent;
  let fixture: ComponentFixture<CatfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
