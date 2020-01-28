import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPersonalComponent } from './loan-personal.component';

describe('LoanPersonalComponent', () => {
  let component: LoanPersonalComponent;
  let fixture: ComponentFixture<LoanPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
