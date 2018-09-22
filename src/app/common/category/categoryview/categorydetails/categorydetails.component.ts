import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#recent-tab li').removeClass('active');
     $('.pcatdetail').addClass('active');
  }

}
