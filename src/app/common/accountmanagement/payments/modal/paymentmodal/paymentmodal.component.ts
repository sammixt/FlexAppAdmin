import { Component, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-paymentmodal',
  templateUrl: './paymentmodal.component.html',
  styleUrls: ['./paymentmodal.component.css']
})
export class PaymentmodalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  payer: string;
  getter: string;
  amountRequested: string;
  amountCharged: string;
  transactionType?: string;
  paidOn: string;
  approvalStatus: string;
  transactionStatus: string;
  detail:string;
  appMod: string;
  createdBy: string;
  createdDate: string;
  closeBtnName: string;
}
