import { Component, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";
import { InvoiceModel } from "../../../../viewmodel/invoice-model.model";
@Component({
  selector: 'app-inventorymodal',
  templateUrl: './inventorymodal.component.html',
  styleUrls: ['./inventorymodal.component.css']
})
export class InventorymodalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  initialState : InvoiceModel 
}
