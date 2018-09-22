import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap/modal";
import { TransactionModel } from "../../../../../viewmodel/transaction.model";

@Component({
  selector: 'app-transactionmodal',
  templateUrl: './transactionmodal.component.html',
  styleUrls: ['./transactionmodal.component.css']
})
export class TransactionmodalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  initialState: TransactionModel
  

}
