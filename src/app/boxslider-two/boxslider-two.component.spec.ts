import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxsliderTwoComponent } from './boxslider-two.component';

describe('BoxsliderTwoComponent', () => {
  let component: BoxsliderTwoComponent;
  let fixture: ComponentFixture<BoxsliderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxsliderTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxsliderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
