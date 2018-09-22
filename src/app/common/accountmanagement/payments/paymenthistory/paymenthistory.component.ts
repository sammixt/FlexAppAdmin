import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap/modal";
import { PaymentmodalComponent } from "../modal/paymentmodal/paymentmodal.component";

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {

 bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService){ }

  ngOnInit() {
  }

  openModalWithComponent() {
    const initialState = {
        payer: 'Ahmed A. Okafor',
		  getter: 'DELL',
		  amountRequested: '2,000,000,01',
		  amountCharged: '500,000,01',
		  transactionType: 'Payment',
		  paidOn: '2018-01-08',
		  approvalStatus: 'Approved',
		  transactionStatus: 'True',
		  detail:'Payment of Laptop',
		  appMod: 'FLAP',
		  createdBy: 'SYS ADMIN',
		  createdDate: '2018-01-08',
        title: 'Payment Details'
    };
    this.bsModalRef = this.modalService.show(PaymentmodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
