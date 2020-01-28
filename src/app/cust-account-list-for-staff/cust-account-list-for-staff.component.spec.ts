import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAccountListForStaffComponent } from './cust-account-list-for-staff.component';

describe('CustAccountListForStaffComponent', () => {
  let component: CustAccountListForStaffComponent;
  let fixture: ComponentFixture<CustAccountListForStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustAccountListForStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAccountListForStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
