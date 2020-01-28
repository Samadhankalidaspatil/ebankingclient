import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsStaffComponent } from './customer-details-staff.component';

describe('CustomerDetailsStaffComponent', () => {
  let component: CustomerDetailsStaffComponent;
  let fixture: ComponentFixture<CustomerDetailsStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
