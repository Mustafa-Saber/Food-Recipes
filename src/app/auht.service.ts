import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuhtService {
  baseURL: string = 'https://routeegypt.herokuapp.com/';
  constructor(private _HttpClient: HttpClient) {}
  registerUsers(data: object): Observable<any> {
    return this._HttpClient.post(this.baseURL + 'signup', data);
  }
  AuthUserLogin(data: object): Observable<any> {
    return this._HttpClient.post(this.baseURL + `signin`, data);
  }
}
