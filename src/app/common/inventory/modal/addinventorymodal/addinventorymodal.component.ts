import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import * as $ from "jquery";
import { InvoiceModel } from "../../../../viewmodel/invoice-model.model";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-addinventorymodal',
  templateUrl: './addinventorymodal.component.html',
  styleUrls: ['./addinventorymodal.component.css']
})
export class AddinventorymodalComponent implements OnInit {

  //inventory : InvoiceModel
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  initialState : InvoiceModel 

  OnSubmit(inventoryForm:NgForm){
      console.log(inventoryForm.value);
  }
}
