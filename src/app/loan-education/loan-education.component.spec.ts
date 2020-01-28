import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEducationComponent } from './loan-education.component';

describe('LoanEducationComponent', () => {
  let component: LoanEducationComponent;
  let fixture: ComponentFixture<LoanEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
