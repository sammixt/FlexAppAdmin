import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap/modal";
import { EodModel } from "../../../../../viewmodel/eod.model";


@Component({
  selector: 'app-eodmodal',
  templateUrl: './eodmodal.component.html',
  styleUrls: ['./eodmodal.component.css']
})
export class EodmodalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

     initialState: EodModel
}
