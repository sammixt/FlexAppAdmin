import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap/modal";
import { InventorymodalComponent } from "./modal/inventorymodal/inventorymodal.component";
import { InvoiceModel } from "../../viewmodel/invoice-model.model";
import { AddinventorymodalComponent } from "./modal/addinventorymodal/addinventorymodal.component";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalWithComponent() {
    const initialState : InvoiceModel = {
		   batchNumber: 'jhhshdhsdh',
      orderType: 'sjhsjdjsd',
      expectedDate: 'jshjdhsdjsd',
      product: 'sdjsgdjshd',
      unitPrice: 'hsjdhsu',
      amount: 'jhunjs',
      yearMonth: 'jshdjshdsu',
      inventorySold: 'hdsjhuhb',
      inventoryAvailable: 'jhdsuudus',
      location: 'sidhn',
      title: 'Inventory Details'
    };
    this.bsModalRef = this.modalService.show(InventorymodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openModalToAddInventory(){
    const initialState : InvoiceModel = {
      batchNumber: ' ',
        orderType: ' ',
        expectedDate: ' ',
        product: ' ',
        unitPrice: ' ',
        amount: ' ',
        yearMonth: ' ',
        inventorySold: ' ',
        inventoryAvailable: ' ',
        location: ' ',
        program: ' ',
        productCategory: ' ',
        brand: ' ',
        appModule: ' ',
        supplier: ' ',
        transactionDate: ' ',
        createdBy: ' ',
        quantity: 0,
        title: 'Add inventory'
     
    };
    this.bsModalRef = this.modalService.show(AddinventorymodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
