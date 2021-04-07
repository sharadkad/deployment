import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidelogoComponent } from './asidelogo.component';

describe('AsidelogoComponent', () => {
  let component: AsidelogoComponent;
  let fixture: ComponentFixture<AsidelogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsidelogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidelogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
