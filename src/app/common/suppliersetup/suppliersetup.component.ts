import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Supplier } from "../../viewmodel/supplier.model";
import { AddSuplierComponent } from "./modal/add-suplier/add-suplier.component";
import { EditSuplierComponent } from "./modal/edit-suplier/edit-suplier.component";
import { ViewSuplierComponent } from "./modal/view-suplier/view-suplier.component";

@Component({
  selector: 'app-suppliersetup',
  templateUrl: './suppliersetup.component.html',
  styleUrls: ['./suppliersetup.component.css']
})
export class SuppliersetupComponent implements OnInit {

   bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openAddModalWithComponent() {
    const initialState : Supplier = {
		  company : 'Bla bla bla',
    officialemail : 'blabla@gmail.com',
    bank : 'Union Bank',
    accountnumber:'0099008798',
    sortcode : '0909',
    phone :'09088998877',
    address : 'gksdhjd jhdkjshd  skjdhksjhd jshdkjs',
    province : 'sdfsdsds',
    state : 'Lagos',
    country : 'Nigeria',
    contactemail : 'blabla@gmail.com',
    createdby : 'samuel',
    
      title: 'Add Supplier'
    };
    this.bsModalRef = this.modalService.show(AddSuplierComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openEditModalWithComponent() {
    const initialState : Supplier = {
		  company : 'Bla bla bla',
    officialemail : 'blabla@gmail.com',
    bank : 'Union Bank',
    accountnumber:'0099008798',
    sortcode : '0909',
    phone :'09088998877',
    address : 'gksdhjd jhdkjshd  skjdhksjhd jshdkjs',
    province : 'sdfsdsds',
    state : 'Lagos',
    country : 'Nigeria',
    contactemail : 'blabla@gmail.com',
    createdby : 'samuel',
    
      title: 'Edit Supplier'
    };
    this.bsModalRef = this.modalService.show(EditSuplierComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openViewModalWithComponent() {
    const initialState : Supplier = {
		  company : 'Bla bla bla',
    officialemail : 'blabla@gmail.com',
    bank : 'Union Bank',
    accountnumber:'0099008798',
    sortcode : '0909',
    phone :'09088998877',
    address : 'gksdhjd jhdkjshd  skjdhksjhd jshdkjs',
    province : 'sdfsdsds',
    state : 'Lagos',
    country : 'Nigeria',
    contactemail : 'blabla@gmail.com',
    createdby : 'samuel',
    
      title: 'Edit Supplier'
    };
    this.bsModalRef = this.modalService.show(ViewSuplierComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
