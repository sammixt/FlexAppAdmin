import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Router } from "@angular/router";

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    $(document).ready(function(){
      $('#body').removeClass('login-layout');
      $('#body').addClass('no-skin')
    });
  }

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
