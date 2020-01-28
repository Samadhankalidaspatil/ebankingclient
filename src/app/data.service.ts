import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{

v:any;

  baseUrlCustList="http://localhost:8080/E_banking__system/staff/custinfo"
  baseUrlCustListForAdmin="http://localhost:8080/E_banking__system/admin/custlist"
  
  baseUrlStaffList="http://localhost:8080/E_banking__system/admin/adminlist"
  baseUrlAddStaff="http://localhost:8080/E_banking__system/admin/addstaff"
  baseUrlAddCust="http://localhost:8080/E_banking__system/staff/addcust"
  baseUrlAddCustAccount="http://localhost:8080/E_banking__system/staff/newaccount/"


  baseUrlStaffHomeData="http://localhost:8080/E_banking__system/staff/sinfo"
  baseUrlCustMoneyXfer="http://localhost:8080/E_banking__system/customer/transfer"
 
  //loan List
  baseUrlAdminLoanList="http://localhost:8080/E_banking__system/admin/loanlist"
  baseUrlStaffLoanList="http://localhost:8080/E_banking__system/staff/loanlist"

  //loan Apply
  baseUrlCusApplyPersonalLoan="http://localhost:8080/E_banking__system/customer/loan/personal/"
  baseUrlCusApplyEducationLoan="http://localhost:8080/E_banking__system/customer/loan/education/"
  baseUrlLoanApply="http://localhost:8080/E_banking__system/customer/loan/home/"

  //Loan Status Change 
  baseUrlLoanStatusStaff="http://localhost:8080/E_banking__system/staff/verify/"
  baseUrlLoanRejectStatusStaff="http://localhost:8080/E_banking__system/staff/reject/"
  baseUrlLoanStatusAdmin="http://localhost:8080/E_banking__system/admin/verifyAfterStaff/"
  baseUrlLoanRejectStatusLoan="http://localhost:8080/E_banking__system/admin/rejectAfterStaff/"

  baseUrlDepositAmountInCust="http://localhost:8080/E_banking__system/staff/addbalance"
  baseUrlDeductAmountInCust="http://localhost:8080/E_banking__system/staff/deductbalance"
  baseUrlCustAccountList="http://localhost:8080/E_banking__system/staff/accountlist"
  baseUrlCustOwnAccountList="http://localhost:8080/E_banking__system/customer/accountdetail/"
  baseUrlCustOwnLoanAccountList="http://localhost:8080/E_banking__system/customer/loanlist/"
  baseUrlDeleteStaff="http://localhost:8080/E_banking__system/admin/delete/"
  baseUrlDeleteCustomer="http://localhost:8080/E_banking__system/staff/delete/"
  baseUrlChangePassword="http://localhost:8080/E_banking__system/user/setPass"
  baseUrlUpdateCust="http://localhost:8080/E_banking__system/staff/updatedetail/"
  baseUrlGetCust="http://localhost:8080/E_banking__system/staff/getdetail/"
  baseUrlUpdateStaff="http://localhost:8080/E_banking__system/admin/updatedetailstaff/"
  baseUrlGetStaff="http://localhost:8080/E_banking__system/admin/getdetailstaff/"

  constructor(public http:HttpClient) {}
   getCustData()
   {
       return this.http.get(this.baseUrlCustListForAdmin);
   }

   getCustDataForStaff()
   {
       return this.http.get(this.baseUrlCustList);
   }
   getStaffData()
   {
       return this.http.get(this.baseUrlStaffList);
   }

 
  getLoanData()
  {
    return this.http.get(this.baseUrlAdminLoanList);
  }
  getLoanDataForStaff()
  {
    return this.http.get(this.baseUrlStaffLoanList);
  }
  accountDetails()
  {
    return this.http.get(this.baseUrlCustAccountList);
  }
  deleteCustomer(no)
  {
    console.log(no);
    return this.http.delete(this.baseUrlDeleteCustomer+no);
  }

  deleteStaff(no)
  {
    console.log(no);
    return this.http.delete(this.baseUrlDeleteStaff+no);
  }

  getCustAccountData(id)
  {
    return this.http.get(this.baseUrlCustOwnAccountList+id);
  }

  getCustLoanAccountData(id)
  {
    return this.http.get(this.baseUrlCustOwnLoanAccountList+id);
  }

  getAddressData(id)
  {
    console.log("Inside service");
    return this.http.get("http://localhost:8080/E_banking__system/user/address/"+id);
  }

  getAddressDataOfAdmin(id)
  {
    console.log("Inside service admin address");
    return this.http.get("http://localhost:8080/E_banking__system/user/address/"+id);
  }

  getAddressDataStaff(id)
  {
    console.log("Inside service admin address");
    return this.http.get("http://localhost:8080/E_banking__system/user/address/"+id);
  }

  deposit(amount)
  {
    console.log("in data serive");
     console.log(amount);
     return this.http.post(this.baseUrlDepositAmountInCust,amount);
  }

  deduct(amount)
  {
    console.log("in data serive");
     console.log(amount);
     return this.http.post(this.baseUrlDeductAmountInCust,amount);
  }

   AddData(emp){
     console.log("in data serive");
     console.log(emp);
     return this.http.post(this.baseUrlAddCust,emp);
   }

   addAccount(id,acc)
   {
    console.log("in data serive");
    console.log(acc);
    return this.http.post(this.baseUrlAddCustAccount+id,acc);
   }

   AddStaffData(staff){
   console.log(staff);
   return this.http.post(this.baseUrlAddStaff,staff);
  }



  AddTransactionData(transfer)
  {
    console.log("in dataservice.ts");
    console.log(transfer);
    return this.http.post(this.baseUrlCustMoneyXfer,transfer);
  }

  addHomeLoanData(loan, id)
  {
    console.log("in dataservice.ts");
    console.log(loan);
    return this.http.post(this.baseUrlLoanApply+id, loan);
  }

  addEducationLoanData(loan, id)
  {
    console.log("in dataservice.ts");
    console.log(loan);
    return this.http.post(this.baseUrlCusApplyEducationLoan+id, loan);
  }

  addPersonalLoanData(loan, id)
  {
    console.log("in dataservice.ts");
    console.log(loan);
    return this.http.post(this.baseUrlCusApplyPersonalLoan+id,loan);
  }



  staffLoanStatus(no){
    return this.http.get(this.baseUrlLoanStatusStaff+no);
   }

   reject(no){
    return this.http.get(this.baseUrlLoanRejectStatusStaff+no);
   }
   approveLoanAdmin(no){
     console.log(" in Data service ts")
     console.log(no);
    return this.http.get(this.baseUrlLoanStatusAdmin+no);
   }
   rejectLoanAdmin(no){
    return this.http.get(this.baseUrlLoanRejectStatusLoan+no);
   }

   changePassword(email)
   {
    console.log("in data serive");
    console.log(email);
    return this.http.post(this.baseUrlChangePassword,email);
   
   }

   update(emp){
     console.log("In update");
    console.log("Updated Data: "+emp.name);
    console.log(emp);
    return this.http.post(this.baseUrlUpdateCust+ emp.id, emp);
   }
   
   SelectById(no){

    return this.http.get(this.baseUrlGetCust+no);

   }

   updateStaff(emp){
    console.log("In update");
   console.log("Updated Data: "+emp.name);
   console.log(emp);
   return this.http.post(this.baseUrlUpdateStaff+emp.id, emp);
  }
  
  SelectStaffById(no){

   return this.http.get(this.baseUrlGetStaff+no);

  }

   getCustAccounts(id)
   {
    console.log("Inside service");
    return this.http.get("http://localhost:8080/E_banking__system/customer/loanlist/"+id);
  
   }

  
}
