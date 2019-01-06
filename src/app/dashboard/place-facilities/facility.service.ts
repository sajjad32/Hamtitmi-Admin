import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  readonly rootURL = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getFacilities(place_id: number) {
    const data = {'action': 'getFacilities', 'place_id': place_id};
    const req = JSON.stringify({data});
    console.log(req);
  }

  addFacility(place_id: number, facility: string): void {
    const data = {'action': 'addFacility', 'place_id': place_id, 'facility': facility};
    const req = JSON.stringify({data});
    console.log(req);
  }

  removeFacility(place_id: number, facility_id: number) {
    const data = {'action': 'removeFacility', 'place_id': place_id, 'facility_id': facility_id};
    const req = JSON.stringify({data});
    console.log(req);
  }

  updateFacility(place_id: number, facility_id: number, facility: string) {
    const data = {'action': 'updateFacility', 'place_id': place_id, 'facility_id': facility_id, 'facility': facility};
    const req = JSON.stringify({data});
    console.log(req);
  }
}
