import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly rootURL = 'http://localhost:5000/admin/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  place_id = '5c992f5fcc9a7b1068001cea';
  place_name = 'مجموعه ورزشی هلال احمر';
  place_base_price = '35000';
  // place_id: Observable<any>;

  constructor(private http: HttpClient) { }

  login(admin) {
    const data = {'admin_username': admin.admin_username, 'admin_password': admin.admin_password};
    const req = JSON.stringify({data});
    console.log('login request: \n', req);
    this.http.put(this.rootURL + 'login', req, {headers: this.httpHeaders}).subscribe(
      r_data => {
        this.place_id = r_data['data']['place_id'];
        this.place_base_price = r_data['data']['place_base_price'];
        this.place_name = r_data['data']['place_name'];
        if (r_data['data']['place_id'] === '') {
          return r_data['msg'];
        }
      },
      error => {
        console.log('login response: \n', error);
      }
    );
  }

  getPlaceInfo(): Observable<any> {
    const data = {'place_id': this.place_id};
    const req = JSON.stringify({data});
    console.log('get-place-info request: \n', req);
    return this.http.put(this.rootURL + 'get-place-info', req, {headers: this.httpHeaders});
  }

  getFacilities(): Observable<any> {
    const data = {'place_id': this.place_id};
    const req = JSON.stringify({data});
    console.log('get-facilities request: \n', req);
    return this.http.put(this.rootURL + 'get-facilities', req, {headers: this.httpHeaders});
  }

  addFacility(facility_title): Observable<any> {
    const data = {'place_id': this.place_id, 'facility_title': facility_title};
    const req = JSON.stringify({data});
    console.log('add-facility request: \n', req);
    return this.http.put(this.rootURL + 'add-facility', req, {headers: this.httpHeaders});
  }

  updateFacility(facility): Observable<any> {
    const data = {'facility_id': facility._id, 'facility_title': facility.facility_title};
    const req = JSON.stringify({data});
    console.log('update-facility request: \n', req);
    return this.http.put(this.rootURL + 'update-facility', req, {headers: this.httpHeaders});
  }

  removeFacility(facility_id: string): Observable<any> {
    const data = {'facility_id': facility_id};
    const req = JSON.stringify({data});
    console.log('remove-facility request: \n', req);
    return this.http.put(this.rootURL + 'remove-facility', req, {headers: this.httpHeaders});
  }

  getImages(): Observable<any> {
    const data = {'place_id': this.place_id};
    const req = JSON.stringify({data});
    console.log('get-images request: \n', req);
    return this.http.put(this.rootURL + 'get-images', req, {headers: this.httpHeaders});
  }

  addImage(image_file): Observable<any> {
    const data = {'place_id': this.place_id, 'image_file': image_file};
    const req = JSON.stringify({data});
    console.log('add-image request: \n', req);
    return this.http.put(this.rootURL + 'add-image', req, {headers: this.httpHeaders});
  }

  removeImage(image_id: string): Observable<any> {
    const data = {'image_id': image_id};
    const req = JSON.stringify({data});
    console.log('remove-image request: \n', req);
    return this.http.put(this.rootURL + 'remove-image', req, {headers: this.httpHeaders});
  }
  
  getTimesTable(start_date, end_date): Observable<any> {
    const data = {'place_id': this.place_id, 'start_date': start_date, 'end_date': end_date};
    const req = JSON.stringify({data});
    console.log('get-times-table request: \n', req);
    return this.http.put(this.rootURL + 'get-times-table', req, {headers: this.httpHeaders});
  }

  enableTime(time_date, time_time): Observable<any> {
    const data = {'place_id': this.place_id, 'time_date': time_date, 'time_time': time_time};
    const req = JSON.stringify({data});
    console.log('enable-time request: \n', req);
    return this.http.put(this.rootURL + 'enable-time', req, {headers: this.httpHeaders});
  }

  disableTime(time_date, time_time): Observable<any> {
    const data = {'place_id': this.place_id, 'time_date': time_date, 'time_time': time_time};
    const req = JSON.stringify({data});
    console.log('disable-time request: \n', req);
    return this.http.put(this.rootURL + 'disable-time', req, {headers: this.httpHeaders});
  }

  editTime(time_date, time_time, time_price): Observable<any> {
    const data = {'place_id': this.place_id, 'time_date': time_date, 'time_time': time_time, 'time_price': time_price};
    const req = JSON.stringify({data});
    console.log('edit-time request: \n', req);
    return this.http.put(this.rootURL + 'edit-time', req, {headers: this.httpHeaders});
  }
}
