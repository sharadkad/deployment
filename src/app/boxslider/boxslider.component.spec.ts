import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxsliderComponent } from './boxslider.component';

describe('BoxsliderComponent', () => {
  let component: BoxsliderComponent;
  let fixture: ComponentFixture<BoxsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
