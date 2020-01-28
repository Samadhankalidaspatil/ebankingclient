import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-transaction-history',
  templateUrl: './cust-transaction-history.component.html',
  styleUrls: ['./cust-transaction-history.component.css']
})
export class CustTransactionHistoryComponent implements OnInit {
  customer:any=JSON.parse(sessionStorage.getItem("user"))
  constructor() { }

  ngOnInit() {
  }

}
