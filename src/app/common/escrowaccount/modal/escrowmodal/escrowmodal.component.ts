import { Component, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";
import { EscrowModel } from "../../../../viewmodel/escrow.model";

@Component({
  selector: 'app-escrowmodal',
  templateUrl: './escrowmodal.component.html',
  styleUrls: ['./escrowmodal.component.css']
})
export class EscrowmodalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

 initialState:EscrowModel
}
