import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { LoanComponent } from './loan/loan.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoanDetailsStaffComponent } from './loan-details-staff/loan-details-staff.component';
import { CustomerDetailsStaffComponent } from './customer-details-staff/customer-details-staff.component';
import { LoanEducationComponent } from './loan-education/loan-education.component';
import { LoanHomeComponent } from './loan-home/loan-home.component';
import { LoanPersonalComponent } from './loan-personal/loan-personal.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { DeductMoneyComponent } from './deduct-money/deduct-money.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CustAccountListForStaffComponent } from './cust-account-list-for-staff/cust-account-list-for-staff.component';
import { CustAppliedLoanComponent } from './cust-applied-loan/cust-applied-loan.component';
import { CustTransactionHistoryComponent } from './cust-transaction-history/cust-transaction-history.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { AuthService } from './auth.service';
import { LoanListCustomerComponent } from './loan-list-customer/loan-list-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    MyAccountComponent,
    MoneyTransferComponent,
    LoanComponent,
    AdminHomeComponent,
    StaffHomeComponent,
    CustomerDetailsComponent,
    StaffDetailsComponent,
    LoanDetailsComponent,
    ForgetPasswordComponent,
    AddStaffComponent,
    AddCustomerComponent,
    LoanDetailsStaffComponent,
    CustomerDetailsStaffComponent,
    LoanEducationComponent,
    LoanHomeComponent,
    LoanPersonalComponent,
    DepositMoneyComponent,
    DeductMoneyComponent,
    TransactionListComponent,
    CustAccountListForStaffComponent,
    CustAppliedLoanComponent,
    CustTransactionHistoryComponent,
    RegisterComponent,
    UpdateComponent,
    UpdateStaffComponent,
    LoanListCustomerComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:LoginComponent},
      {path:'login', component:LoginComponent},
      {path:'user-home', component:UserHomeComponent, canActivate:[AuthService]},
      {path:'my-account', component:MyAccountComponent, canActivate:[AuthService]},
      {path:'money-transfer', component:MoneyTransferComponent, canActivate:[AuthService]},
      {path:'loan', component:LoanComponent, canActivate:[AuthService]},
      {path:'admin-home', component:AdminHomeComponent, canActivate:[AuthService]},
      {path:'staff-home', component:StaffHomeComponent, canActivate:[AuthService]},
      {path:'staff-details', component:StaffDetailsComponent, canActivate:[AuthService]},
      {path:'customer-details', component:CustomerDetailsComponent, canActivate:[AuthService]},
      {path:'loan-details', component:LoanDetailsComponent, canActivate:[AuthService]},
      {path:'forget-password', component:ForgetPasswordComponent, canActivate:[AuthService]},
      {path: 'add-customer', component:AddCustomerComponent, canActivate:[AuthService]},
      {path:'add-staff', component:AddStaffComponent, canActivate:[AuthService]},
      {path:'customer-details-staff', component:CustomerDetailsStaffComponent, canActivate:[AuthService]},
      {path:'loan-details-staff', component:LoanDetailsStaffComponent, canActivate:[AuthService]},
      {path:'loan-education', component:LoanEducationComponent, canActivate:[AuthService]},
      {path:'loan-home', component:LoanHomeComponent, canActivate:[AuthService]},
      {path:'loan-personal', component:LoanPersonalComponent, canActivate:[AuthService]},
      {path:'deposit-money', component:DepositMoneyComponent, canActivate:[AuthService]},
      {path:'deduct-money', component:DeductMoneyComponent, canActivate:[AuthService]},
      {path:'transaction-list', component:TransactionListComponent, canActivate:[AuthService]},
      {path:'cust-account-list-for-staff', component:CustAccountListForStaffComponent, canActivate:[AuthService]},
      {path:'cust-applied-loan', component:CustAppliedLoanComponent, canActivate:[AuthService]},
      {path:'cust-transaction-history', component:CustTransactionHistoryComponent, canActivate:[AuthService]},
      {path:'cust-transaction-history', component:CustTransactionHistoryComponent, canActivate:[AuthService]},
      {path:'register', component:RegisterComponent, canActivate:[AuthService]},
      {path:'update/:id', component:UpdateComponent, canActivate:[AuthService]},
      {path:'update-staff/:id', component:UpdateStaffComponent, canActivate:[AuthService]},
      {path:'loan-list-customer', component:LoanListCustomerComponent, canActivate:[AuthService]}
  ])
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
