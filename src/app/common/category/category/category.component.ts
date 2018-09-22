import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap/modal";
import { AddcategorymodalComponent } from "../modal/addcategorymodal/addcategorymodal.component";
import { EditcategorymodalComponent } from "../modal/editcategorymodal/editcategorymodal.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openAddModalWithComponent() {
    const initialState = {
		   name: 'jhhshdhsdh',
      description: 'sjhsjdjsd',
      symbol: 'jshjdhsdjsd',
      title: 'Add Category'
    };
    this.bsModalRef = this.modalService.show(AddcategorymodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openEditModalWithComponent() {
    const initialState = {
		   name: 'jhhshdhsdh',
      description: 'sjhsjdjsd',
      symbol: 'jshjdhsdjsd',
      organisation: 'blablabla',
      productBrand: 'blablabla',
      appMod: 'FLAP',
      title: 'Edit Category'
    };
    this.bsModalRef = this.modalService.show(EditcategorymodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
