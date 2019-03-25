import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly rootURL = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor() { }

  login(user: Object): void {
    const data = {'action': 'login', 'user': user};
    const req = JSON.stringify({data});
    console.log(req);
  }
}
