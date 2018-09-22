import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EodmodalComponent } from "../modal/eodmodal/eodmodal.component";
import { EodModel } from "../../../../viewmodel/eod.model";

@Component({
  selector: 'app-eod',
  templateUrl: './eod.component.html',
  styleUrls: ['./eod.component.css']
})
export class EodComponent implements OnInit {

  bsModalRef: BsModalRef;
 
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    $('#recent-tab li').removeClass('active');
    $('.eod').addClass('active');
  }

   openModalWithComponent() {
    const  initialState: EodModel = {
    transactionDate: '2018-06-15',
		transactionTime: '07:41:56 AM',
		endCredit: '10,000,000,01',
		endDebit: '00',
		Organisation: 'DELL',
		appMod:'FLAP',
		createdBy:'STS ADMIN',
    title: 'EOD Details'
    };
    this.bsModalRef = this.modalService.show(EodmodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
