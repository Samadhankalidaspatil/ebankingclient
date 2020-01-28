import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanListCustomerComponent } from './loan-list-customer.component';

describe('LoanListCustomerComponent', () => {
  let component: LoanListCustomerComponent;
  let fixture: ComponentFixture<LoanListCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanListCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
