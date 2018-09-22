import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TransactionmodalComponent } from "../modal/transactionmodal/transactionmodal.component";
import { TransactionModel } from "../../../../viewmodel/transaction.model";


@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
     $('#recent-tab li').removeClass('active');
     $('.transact').addClass('active');
  }

  openModalWithComponent() {
    const initialState:TransactionModel = {
      fullName: 'Ahmed A. Okafor',
      credit: '2,000,000,01',
      debit: '00',
      transactionDate: '2018-06-15',
      transactionTime: '07:41:56 AM',
      transactionRef: 'VPQCCNR',
      transactionDetail: 'Detail',
      appMod: 'FLAP',
      title: 'Transaction Detail'
    };
    this.bsModalRef = this.modalService.show(TransactionmodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
