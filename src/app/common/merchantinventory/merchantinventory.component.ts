import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { InvoiceModel } from "../../viewmodel/invoice-model.model";
import { InventorymodalComponent } from "../inventory/modal/inventorymodal/inventorymodal.component";
import { AddinventorymodalComponent } from "../inventory/modal/addinventorymodal/addinventorymodal.component";

@Component({
  selector: 'app-merchantinventory',
  templateUrl: './merchantinventory.component.html',
  styleUrls: ['./merchantinventory.component.css']
})
export class MerchantinventoryComponent implements OnInit {

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
      title: "Add Inventory"
    };
    this.bsModalRef = this.modalService.show(AddinventorymodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
