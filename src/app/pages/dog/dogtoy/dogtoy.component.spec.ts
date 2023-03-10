import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogtoyComponent } from './dogtoy.component';

describe('DogtoyComponent', () => {
  let component: DogtoyComponent;
  let fixture: ComponentFixture<DogtoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogtoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogtoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
