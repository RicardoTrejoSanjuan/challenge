import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
// import * as dataJson from './assets/data'

@Injectable()
export class RequestService {
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        // this.url = "https://reqres.in/api/user/2";
        this.url = "./assets/data.json"
    }

    getCountries(): Observable<any>{
        return this._http.get(this.url);
    };
}