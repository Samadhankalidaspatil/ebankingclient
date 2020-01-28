import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  customer:any=JSON.parse(sessionStorage.getItem("user"))
  constructor() { }

  ngOnInit() {
  }

}
