import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsStaffComponent } from './loan-details-staff.component';

describe('LoanDetailsStaffComponent', () => {
  let component: LoanDetailsStaffComponent;
  let fixture: ComponentFixture<LoanDetailsStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailsStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailsStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
