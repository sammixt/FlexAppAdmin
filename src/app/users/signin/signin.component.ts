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
  token;
  data = {
    'username': 'Asiwaju',
    'password': 'password'
  };

    initData = {
    application_modules : [],
    exp : 1527373299,
    iat : 1527355299,
    message : 'Success! So We know you. But not completely. So....',
    question : 'What was your favorite place to visit as a child?',
    question_number : 3,
    role : [],
    status : 0,
    sub : 'Asiwaju',
    userId : '1',
    who : 'BRE4fgy'
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
