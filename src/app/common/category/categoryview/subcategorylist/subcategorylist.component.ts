import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AddsubcategorymodalComponent } from "../../modal/addsubcategorymodal/addsubcategorymodal.component";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-subcategorylist',
  templateUrl: './subcategorylist.component.html',
  styleUrls: ['./subcategorylist.component.css']
})
export class SubcategorylistComponent implements OnInit {

 bsModalRef: BsModalRef;
 constructor(private modalService: BsModalService) { }


  ngOnInit() {
     $('#recent-tab li').removeClass('active');
     $('.subcatlst').addClass('active');
  }

  openAddModalWithComponent() {
    const initialState = {
		   name: 'jhhshdhsdh',
      description: 'sjhsjdjsd',
      symbol: 'jshjdhsdjsd',
      title: 'Add Subcategory'
    };
    this.bsModalRef = this.modalService.show(AddsubcategorymodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  

}
