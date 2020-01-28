import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductMoneyComponent } from './deduct-money.component';

describe('DeductMoneyComponent', () => {
  let component: DeductMoneyComponent;
  let fixture: ComponentFixture<DeductMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
