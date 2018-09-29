import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import * as jwtDecode from 'jwt-decode';
import * as $ from 'jquery';
import { RegisterService } from "../../bll/register-service";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: RegisterService, private httpclient: HttpClient, private router: Router) { }
  token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBc2l3YWp1IiwidXNlcklkIjoiMSIsInJvbGUiOltdLCJhcHBsaWNhdGlvbl9tb2R1bGVzIjpbIkZMQVAiLCJGTEVYLUNVUlJFTkNZIiwiRkxFWFBBWS1JTlRFUk5BVElPTiJdLCJpc3N1ZXIiOiJTWVNURU1fQURNSU4iLCJtZXNzYWdlIjoibG9naW4gc3VjY2Vzc2Z1bCIsIndobyI6Ikg3MUxJNWciLCJxdWVzdGlvbl9udW1iZXIiOjMsImlhdCI6MTUzNzgxMjkwOCwiZXhwIjoxNTM3ODMwOTA4fQ.Ys1tsrYDzgSfR806utsKKlp5MHuvyV4Nlncm2TBN59M-bX6msxrO-Bwiy9xIL71D9qSvuVkuABtlbD0USBPtPQ";
  data = {
    'username': 'Asiwaju',
    'password': 'password'
  };

    initData = {
    application_modules : ["FLAP","FLEX-CURRENCY","FLEXPAY-INTERNATION"],
    exp : 1537830908,
    iat : 1537812908,
    message : 'login successful',
    question : 'What was your favorite place to visit as a child?',
    question_number : 3,
    role : [],
    issuer : "SYSTEM_ADMIN",
    sub : 'Asiwaju',
    userId : '1',
    who : 'H71LI5g'
  };

   ngOnInit() {
    $('.login-layout')
  }

  OnSubmit(userName,password){
     $('.submitBtn').html("<i class='fa fa-spinner fa-spin '></i> Processing");
      $('.submitBtn').html("<i class='fa fa-spinner fa-spin '></i> Processing");

    if (userName === 'admin@flap.com' && password === 'admin') {
      this.router.navigate(['acctmgttrans']);
      localStorage.setItem('userToken',userName);
    }
  }
}
