import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-subcategorydetails',
  templateUrl: './subcategorydetails.component.html',
  styleUrls: ['./subcategorydetails.component.css']
})
export class SubcategorydetailsComponent implements OnInit {

  constructor() { }

   ngOnInit() {
    $('#recent-tab li').removeClass('active');
     $('.subcatdetail').addClass('active');
  }

}
