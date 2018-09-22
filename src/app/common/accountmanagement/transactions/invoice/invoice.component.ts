import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap/modal";
import { InvoicemodalComponent } from "../modal/invoicemodal/invoicemodal.component";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

   bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    $('#recent-tab li').removeClass('active');
    $('.invoice').addClass('active');
  }

    openModalWithComponent() {
    const initialState = {
        fullName: 'Ahmed A. Okafor',
        amount: '2,000,000,01',
        detail: 'Purchase of Laptop',
        merchant: 'DELL',
        platform: 'POS',
        transactionType: 'Payment',
        appMod: 'FLAP',
        status: 'True',
        createdBy: 'SYS ADMIN',
        createdDate: '2018-01-08',
        title: 'Invoice Details'
    };
    this.bsModalRef = this.modalService.show(InvoicemodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
