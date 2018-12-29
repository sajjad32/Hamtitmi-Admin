import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Time } from './Time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  readonly rootURL = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  enableTime(time: Time): void {
    const data = {'action': 'enable', 'time': time};
    const req = JSON.stringify({data});
    console.log(req);
  }

  disableTime(time: Time): void {
    const data = {'action': 'disable', 'time': time};
    const req = JSON.stringify({data});
    console.log(req);
  }

  updateTime(time: Time): void {
    const data = {'action': 'update', 'time': time};
    const req = JSON.stringify({data});
    console.log(req);
  }

  getTimes(input: Object): void {
    const data = {'action': 'getTimes', 'input': input};
    const req = JSON.stringify({data});
    console.log(req);
  }
}


// enableTime(time: Time): Observable<any> {
//   const data = {'action': 'enable', 'time': time};
// const req = JSON.stringify({data});
// console.log(req);
// return this.http.post(this.rootURL + '/time', req, {headers: this.httpHeaders});
// }
