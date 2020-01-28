import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustTransactionHistoryComponent } from './cust-transaction-history.component';

describe('CustTransactionHistoryComponent', () => {
  let component: CustTransactionHistoryComponent;
  let fixture: ComponentFixture<CustTransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustTransactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
