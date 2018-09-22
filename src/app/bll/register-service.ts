import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Login} from "../viewmodel/login.model";

@Injectable()
export class RegisterService {

    readonly rootUrl = "http://localhost:58715/";

     token: string;
        httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };
    constructor(private http: HttpClient) { }

    userAuthentication(username,password){
    var data = "username="+username+"&password="+password+"&grant_type=password" ;
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded','No-Auth':'True'});
    return this.http.post(this.rootUrl+'Token',data,{headers:reqHeader});
  }
}
