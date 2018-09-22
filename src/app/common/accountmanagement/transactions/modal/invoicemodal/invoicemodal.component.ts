import { Component, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-invoicemodal',
  templateUrl: './invoicemodal.component.html',
  styleUrls: ['./invoicemodal.component.css']
})
export class InvoicemodalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  fullName: string;
  amount: string;
  detail: string;
  merchant: string;
  platform: string;
  transactionType?: string;
  appMod: string;
  status: string;
  createdBy: string;
  createdDate: string;
  closeBtnName: string;
}
