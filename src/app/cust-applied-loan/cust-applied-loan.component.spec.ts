import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAppliedLoanComponent } from './cust-applied-loan.component';

describe('CustAppliedLoanComponent', () => {
  let component: CustAppliedLoanComponent;
  let fixture: ComponentFixture<CustAppliedLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustAppliedLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAppliedLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
