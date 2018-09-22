import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap/modal";
import { EscrowmodalComponent } from "./modal/escrowmodal/escrowmodal.component";
import { EscrowModel } from "../../viewmodel/escrow.model";
@Component({
  selector: 'app-escrowaccount',
  templateUrl: './escrowaccount.component.html',
  styleUrls: ['./escrowaccount.component.css']
})
export class EscrowaccountComponent implements OnInit {

   bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalWithComponent() {
    const initialState:EscrowModel = {
		  fullName: 'Ahmed A. Okafor',
		  product: 'Smart TV 55 Inch LG',
		  quantity: '2 Pcs',
		  merchant: 'LG',
		  approvalStatus: 'OPEN',
		  approvedDate: '2018-01-04',
		  approvedBy: 'SYS ADMIN',
		  appMod: 'FLAP',
		  transactionStatus: 'False',
      title: 'Escrow Details'
    };
    this.bsModalRef = this.modalService.show(EscrowmodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
