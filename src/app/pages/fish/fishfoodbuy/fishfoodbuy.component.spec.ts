import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishfoodbuyComponent } from './fishfoodbuy.component';

describe('FishfoodbuyComponent', () => {
  let component: FishfoodbuyComponent;
  let fixture: ComponentFixture<FishfoodbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishfoodbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishfoodbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
