import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgroomingComponent } from './catgrooming.component';

describe('CatgroomingComponent', () => {
  let component: CatgroomingComponent;
  let fixture: ComponentFixture<CatgroomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgroomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatgroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
