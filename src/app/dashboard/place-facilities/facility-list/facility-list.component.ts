import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../_services/admin.service';
import {Facility} from '../Facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilities = Array(Facility);
  new_facility_title = '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getFacilities();
  }

  getFacilities() {
    this.adminService.getFacilities().subscribe(
      data => {
        this.facilities = data['data']['place_facilities'];
        console.log('get-facilities response: \n', data);
      },
      error => {
        console.log('get-facilities response error: \n', error);
      }
    );
  }

  addFacility() {
    if (this.new_facility_title !== '') {
      this.adminService.addFacility(this.new_facility_title).subscribe(
        data => {
          console.log('add-facility response: \n', data);
          this.new_facility_title = '';
          this.getFacilities();
        },
        error => {
          console.log('add-facility response error: \n', error);
        }
      );
    }
  }

}
